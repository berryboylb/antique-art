// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract Presale is ReentrancyGuard, Context, Ownable{
  using SafeMath for uint256;
  
  mapping (address => uint256) public _contributions;
  
  address public _admin;
  IERC20 public _token;
  uint public minPurchase;
  uint public maxPurchase;
  uint public hardCap;
  uint256 public endICO;
  uint public softCap;
  uint public availableTokens;
  uint256 public _rate;
  uint256 public _tokenDecimals;
  uint256 public _weiRaised;
  address payable public _wallet;
  
  enum PresaleStage {first, second}
  
  PresaleStage public stage = PresaleStage.first;

  event PresaleProcessed(
    address recipient,
    uint amount,
    uint date
  );

    constructor(uint256 rate, address payable wallet, IERC20 token, uint256 tokenDecimals) {
        require(rate > 0, "Pre-Sale: rate is 0");
        require(wallet != address(0), "Pre-Sale: wallet is the zero address");
        require(address(token) != address(0), "Pre-Sale: token is the zero address");
        
    
        _rate = rate;
        _wallet = wallet;
        _token = token;
        _tokenDecimals = 18 - tokenDecimals;
    }

  
    receive () external payable {
        if(endICO > 0 && block.timestamp < endICO){
            buyTokens(_msgSender());
        }
        else{
            endICO = 0;
            revert('Pre-Sale is closed');
        }
    }
    
    //Start Pre-Sale
    function startICO(uint endDate, uint _minPurchase, uint _maxPurchase, uint _softCap, uint _hardCap) external onlyOwner icoNotActive() {
        availableTokens = _token.balanceOf(address(this));
        require(endDate > block.timestamp, 'duration should be > 0');
        require(softCap < hardCap, "Softcap must be lower than Hardcap");
        require(minPurchase < maxPurchase, "minPurchase must be lower than maxPurchase");
        require(availableTokens > 0 , 'availableTokens must be > 0');
        require(_minPurchase > 0, '_minPurchase should > 0');
        endICO = endDate; 
        minPurchase = _minPurchase;
        maxPurchase = _maxPurchase;
        softCap = _softCap;
        hardCap = _hardCap;
        _weiRaised = 0;
    }
  
    function stopICO() external onlyOwner icoActive(){
        endICO = 0;
        if(_weiRaised >= softCap) {
            _forwardFunds();
        }
        /*else{
            startRefund = true;
            refundStartDate = block.timestamp;
        }*/
    }
    
    function _forwardFunds() internal {
        _wallet.transfer(msg.value);
    }
  
    function buyTokens(address beneficiary) public nonReentrant icoActive payable {
        uint256 weiAmount = msg.value;
        _preValidatePurchase(beneficiary, weiAmount);
        uint256 tokens = _getTokenAmount(weiAmount);
        _weiRaised = _weiRaised.add(weiAmount);
        availableTokens = availableTokens - tokens;
        _contributions[beneficiary] = _contributions[beneficiary].add(weiAmount);
        
        uint256 amount = claimTokens(beneficiary);
        
        emit PresaleProcessed(
          beneficiary,
          amount,
          block.timestamp
        );
    }
    
    function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view {
        require(beneficiary != address(0), "Crowdsale: beneficiary is the zero address");
        require(weiAmount != 0, "Crowdsale: weiAmount is 0");
        require(weiAmount >= minPurchase, 'have to send at least: minPurchase');
        require(_contributions[beneficiary].add(weiAmount)<= maxPurchase, 'can\'t buy more than: maxPurchase');
        require((_weiRaised+weiAmount) <= hardCap, 'Hard Cap reached');
        this; 
    }
    
    function claimTokens(address reciever) internal icoNotActive returns(uint256){
        uint256 tokensAmt = _getTokenAmount(_contributions[reciever]);
        _contributions[reciever] = 0;
        _token.transfer(reciever, tokensAmt);
        return tokensAmt;
    }
    
    function _getTokenAmount(uint256 weiAmount) internal view returns (uint256) {
        return weiAmount.mul(_rate).div(10**_tokenDecimals);
    }
    
    function withdraw() external onlyOwner icoNotActive{
         //require(startRefund == false || (refundStartDate + 3 days) < block.timestamp);
         require(address(this).balance > 0, 'Contract has no money');
        _wallet.transfer(address(this).balance);    
    }
    
    function checkContribution(address addr) public view returns(uint256){
        return _contributions[addr];
    }

    function setRate(uint256 newRate) external onlyOwner icoNotActive{
        _rate = newRate;
    }
    
    function setAvailableTokens(uint256 amount) public onlyOwner icoNotActive{
        availableTokens = amount;
    }
 
    function weiRaised() public view returns (uint256) {
        return _weiRaised;
    }
    
    function setWalletReceiver(address payable newWallet) external onlyOwner(){
        _wallet = newWallet;
    }
    
    function setHardCap(uint256 value) external onlyOwner{
        hardCap = value;
    }
    
    function setSoftCap(uint256 value) external onlyOwner{
        softCap = value;
    }
    
    function setMaxPurchase(uint256 value) external onlyOwner{
        maxPurchase = value;
    }
    
     function setMinPurchase(uint256 value) external onlyOwner{
        minPurchase = value;
    }
    
    function takeTokens(IERC20 tokenAddress)  public onlyOwner icoNotActive{
        IERC20 tokenBEP = tokenAddress;
        uint256 tokenAmt = tokenBEP.balanceOf(address(this));
        require(tokenAmt > 0, 'BEP-20 balance is 0');
        tokenBEP.transfer(_wallet, tokenAmt);
    }
    
    modifier icoActive() {
        require(endICO > 0 && block.timestamp < endICO && availableTokens > 0, "ICO must be active");
        _;
    }
    
    modifier icoNotActive() {
        require(endICO < block.timestamp, 'ICO should not be active');
        _;
    }
}
