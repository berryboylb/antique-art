const { expectRevert } = require('@openzeppelin/test-helpers');
const Token = artifacts.require('NAAToken.sol');
const Airdrop = artifacts.require('Airdrop.sol');
const Presale = artifacts.require('Presale.sol');

contract('Airdrop', ([admin, _]) => {
	let token, airdrop;
	const TOTAL_SUPPLY = web3.utils.toWei('10000000000');
	const AIRDROP = web3.utils.toWei('10000000000')
	const PRESALE = web3.utils.toWei('10000000000')
	beforeEach(async () => {
		token = await Token.new();
		airdrop = await  Airdrop.new(token.address);
		presale = await  Presale.new(token.address);
		await token.transfer(airdrop.address, AIRDROP);
		await token.transfer(presale.address, PRESALE);
	});

	// it('only admin can update presale stage', async () =>{
		
	// })
});
