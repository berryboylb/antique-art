import {useState} from 'react';
//import {ethers} from 'ethers';
import { useMediaQuery } from 'react-responsive';
//mport detectEthereumProvider from '@metamask/detect-provider';
//import Web3 from 'web3';
//import Presale from "../../contracts/Presale.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faChevronRight, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"
import  "../../css/styles.module.css"

const Index = ({handlePopUp, childToParent}) => {
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    const [errorMessage, setErrorMessage] = useState(null);
    //const [defaultAccount, setDefaultAccount] = useState(null);
    //const [userBalance, setUserBalance] = useState(null);
    const [conButtonMetamask, setConButtonMetMask] = useState('');
    let address = "";

    const connectWalletHandler = () => {
       
        if(window.ethereum){
            window.ethereum.request({
                method: 'eth_requestAccounts'
            }).then(result => {
                accountChangedHandler(result[0]);
                address = result[0];
                childToParent(address);

                if(address === result[0]){
                    handlePopUp();
                }
               
            })
        
        }else {
            setErrorMessage("Install Metamask")
        }
    }

    const accountChangedHandler = (newAccont) => {
        if(isMobile){
            setConButtonMetMask(newAccont.substring(0, 10) + '...' + newAccont.substring(newAccont.length - 10))
        }else {
            setConButtonMetMask(newAccont);
        }
        //setDefaultAccount(newAccont);
        getUserBalance(newAccont.toString());
    }

    const getUserBalance = (address) => {
        window.ethereum.request({
            method: 'eth_getBalance', params: [address, 'latest']
        }).then(balance => {
            //setUserBalance(ethers.utils.formatEther(balance));
        })
    }

    const chainChangeHandler = () => {
        window.location.reload();
    }

    window.ethereum.on('accountsChanged', accountChangedHandler);
    window.ethereum.on('chainChanged', chainChangeHandler);
  
    return (
        <div className={Styles.pop}>
             <FontAwesomeIcon onClick={handlePopUp} icon={faTimes} className={Styles.icon} />
            <div className={Styles.inner}>
                {/* <button> <div><img src="./trustwallet.png" alt="Trust wallet logo" /> TrustWallet </div>  <FontAwesomeIcon onClick={handlePopUp} icon={faChevronRight} className={Styles.con} /></button> */}
                {conButtonMetamask ? 
                    <div className={Styles.approved}>
                        <FontAwesomeIcon onClick={handlePopUp} icon={faCheckCircle} className={Styles.conn} />
                        <h3>
                            {conButtonMetamask}
                        </h3>
                    </div> : 
                    <button onClick={ async() => {
                        connectWalletHandler()
                        // setTimeout(() => {
                        //     childToParent(address);
                        //     handlePopUp();
                        // }, 1000)
                        }}> 
                        <div><img src="./meta mask.png" alt="Meta mask logo" /> <img src="./trustwallet.png" alt="Trust wallet logo" />Metamask/Trustwallet</div> 
                        <FontAwesomeIcon onClick={handlePopUp} icon={faChevronRight} className={Styles.con} />
                    </button>}
                {/* {conButtonMetamask && <h3>Address: {conButtonMetamask}</h3>}
                {userBalance && <h3>balance: {userBalance }</h3>} */}
                <div>{errorMessage }</div>
            </div>
        </div>
    )
}

export default Index
