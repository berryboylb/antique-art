import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"
const Index = ({handleAirdrop, data}) => {
    return (
        <div className= {Styles.airdrop}>
            <FontAwesomeIcon onClick={handleAirdrop} icon={faTimes} className={Styles.icon} />
            {data ? <form action="">
                <h3>Airdrop</h3>
                <div>
                    <input type="text" name="airdrop" id="airdrop" placeholder="Address"/>
                </div>
                <div>
                    <button type="submit">Claim Airdrop</button>
                </div>
            </form> :
                <div className={Styles.error}>
                    <div>
                        <img src = "./error.png" alt = "Error"/>
                    </div>
                    <h3>Please Connect to a wallet !!!</h3>
                </div>
            }
        </div>
    )
}

export default Index
