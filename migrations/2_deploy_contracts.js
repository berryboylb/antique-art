const NAAToken = artifacts.require("NAAToken");
const Airdrop = artifacts.require("Airdrop");
const Presale = artifacts.require("Presale");
//const wallet = "0x9F1660ce19314388A7ad185Be87dD97a64D422c6";

module.exports = async function (deployer, _network, accounts) {
  await deployer.deploy(NAAToken);
  const token = await NAAToken.deployed();
  await deployer.deploy(Airdrop, token.address, accounts[0]);
  await deployer.deploy(Presale, 1000, accounts[0], token.address, 9);
  const airdrop = await Airdrop.deployed();
  const presale = await Presale.deployed();

  //value is in wei, remember to alter it
  //here we are sending the token to the airdrop and presale contracts respectively
  await token.transfer(airdrop.address, 10000000);
  await token.transfer(presale.address, 1000000000);
  //await token.transfer(0x6c42811aa8a227f158bd84c0f97d9fa1a644226c, 1000);
};
