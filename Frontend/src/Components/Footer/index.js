import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import ParentStyles from "../../css/styles.module.css"
import Styles from "./css/styles.module.css"

const index = ({handlePresale, handleAirdrop}) => {
    return (
        <footer className={Styles.footer}>
            <div className={`${ParentStyles.myContainer} ${Styles.inner}`}>
                <div className={Styles.flex}>
                <div className={Styles.con}>
                    <div className={Styles.imgCon}><img src="./logoblue.png" alt="Logo" /></div>
                    <p >Synergizing the Past(Ancient)with the future(Present).</p>
                </div>
                <div className={Styles.help}>
                    <h3>Help</h3>
                    <div>
                        <Link to = "FAQ" activeClass="active" spy={true} smooth={true}>FAQ</Link>
                        <a download target="_blank" rel="noopener noreferrer" href="./NAA white paper.pdf" onClick={handleAirdrop}>Whitepaper</a>
                        <p download target="_blank" rel="noopener noreferrer" onClick={handleAirdrop}>Airdrop</p>
                        <p download target="_blank" rel="noopener noreferrer" onClick={handlePresale}>Presale</p>
                    </div>
                </div>
                <div className={Styles.social}>
                    <h3>Socials</h3>
                    <div className={Styles.bro}>
                        <a href="https://t.me/NAA_community"><FontAwesomeIcon icon={faTelegram} className={Styles.con} /></a>
                        <a href="https://wa.me/23409032623891"><FontAwesomeIcon icon={faTwitter} className={Styles.con} /></a>
                    </div>
                </div>
                </div>
                <div className={Styles.right}>
                    <p>© NFT Antique Art All rights reserved 2021</p>
                </div>
            </div>
            
        </footer>
    )
}

export default index
