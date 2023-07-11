import Web3 from 'web3';
import Presale from "../../contracts/Presale.json";

const getWeb3 =  async () => {
//window.addEventListener('load', async () => {
 // Wait for loading completion to avoid race conditions with web3 injection timing.
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    //   window.ethereum.request({method: 'eth_requestAccounts'})
    //         .then(result => {console.log(result  + " connected")})
    try {
      // Request account access if needed
      await window.ethereum.request({method: 'eth_requestAccounts'});
      // Acccounts now exposed
      return web3;
    } catch (error) {
      console.error(error);
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    // Use Mist/MetaMask's provider.
    const web3 = window.web3;
    console.log('Injected web3 detected.');
    return web3;
  }
  // Fallback to localhost; use dev console port by default...
  else {
    const provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
    const web3 = new Web3(provider);
    console.log('No web3 instance injected, using Local web3.');
    return web3;
  }
//});
}

    const accountChangedHandler = (newAccont) => {
        //setConButtonMetMask(newAccont);
        //setDefaultAccount(newAccont);
        //getUserBalance(newAccont.toString());
    }


    const chainChangeHandler = () => {
        window.location.reload();
    }

    window.ethereum.on('accountsChanged', accountChangedHandler);
    window.ethereum.on('chainChanged', chainChangeHandler);


const getPresale = async web3 => {
    //const networkId = await web3.eth.net.getId();
    /*This line is supposed to be
    const deployedNetwork = Presale.networks[networkId]
    networkId = 1634750176120
    but in the contract artifact i only have "5777" as key there,
    which isn't supposed to be so though, update your code, that it becomes dynamic
    */
    const deployedNetwork = Presale.networks[5777]
    //console.log(deployedNetwork)
    //console.log(networkId)

    return new web3.eth.Contract(
        Presale.abi,
        deployedNetwork && deployedNetwork.address,
    )
}

export {getWeb3, getPresale};
