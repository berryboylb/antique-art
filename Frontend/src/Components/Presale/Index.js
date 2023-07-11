import {useState} from 'react';
import Web3 from 'web3';
import {ethers} from 'ethers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"
import MyContract from "../../contracts/Presale.json";
//import NAAToken from "../../contracts/NAAToken.json";

const Index = ({handlePresale, data}) => {
    const [amount, setAmount] = useState("");

    const init = async ( amount) => {
        const web3 = new Web3('http://localhost:8545');
        await window.ethereum.send('eth_requestAccounts')
        //const addresses = await web3.eth.getAccounts();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
               
        const deployedNetwork = MyContract.networks[5777];
        
        const contract = new web3.eth.Contract(
            MyContract.abi,
            deployedNetwork.address
        );

        const signer = provider.getSigner();
        await signer.sendTransaction({
            to: contract.options.address,
            value: ethers.utils.parseEther(amount)
        },
        (error, result) => {
            if (error) {
              return console.error(error);
            }
            // Handle the result
            console.log(result);
          }
        );
    }

    const handlePresaleForm = e => {
        e.preventDefault();
        console.log("Your purchase is being processed " + amount + "BNB");
        init(amount);
    }
    return (
        <div className={Styles.presale}>
            <FontAwesomeIcon onClick={handlePresale} icon={faTimes} className={Styles.icon} />
            {data ?<form onSubmit={handlePresaleForm}>
                <h3>Presale...</h3>
                <div>
                    <input 
                        type="text" 
                        name="bnbAddress" 
                        id="bnbAddress" 
                        placeholder="Specify Bnb equivalent you want to purchase"
                        value ={amount}
                        onChange={(e)=>{
                            setAmount(String(e.target.value))
                          }}
                        />
                </div>
                <div>
                    <button type="submit">Buy</button>
                </div>
            </form> : 
            <div className={Styles.error}>
                <div>
                    <img src = "./error.png" alt = "Error"/>
                </div>
                <h3>Please Connect to a wallet !!!</h3>
            </div>}
        </div>
    )
}

export default Index