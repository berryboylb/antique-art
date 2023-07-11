import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom, faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import ParentStyles from "../../css/styles.module.css"
import Styles from "./css/styles.module.css"
import H3 from '../H3'

const index = () => {
    return (
        <section className={Styles.roadmap} id="road">
            <H3 content="ROADMAP"/>
            <div className={`${ParentStyles.myContainer} ${Styles.inner}`}>
               
                <div></div>
               <div className={`${Styles.right} ${Styles.active}`}>
                <FontAwesomeIcon icon={faAtom} className={Styles.con} />
                   <p className={Styles.activated}>STAGE 1</p>  
                   <ul>
                       <li className={Styles.activeLi}> <FontAwesomeIcon icon={faWaveSquare} className={Styles.map} /> Project Started</li>
                    </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
               </div>
               <div className={Styles.left}>
               <FontAwesomeIcon icon={faAtom} className={Styles.con} />
                   <p>STAGE 2</p>  
                   <ul>
                       <li><FontAwesomeIcon icon={faWaveSquare} className={Styles.map} /> Advertisng a grant for substitute based smartchain & Ethereum features</li>
                    </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
               </div>
               <div ></div>
               <div></div>
               <div className={Styles.right}>
               <FontAwesomeIcon icon={faAtom} className={Styles.con} />
                   <p>STAGE 3</p>  
                   <ul>
                       <li><FontAwesomeIcon icon={faWaveSquare} className={Styles.map} /> Liquidity Locking</li>
                       <li><FontAwesomeIcon icon={faWaveSquare} className={Styles.map} /> NAA Token & Presale</li>
                    </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
               </div>
               <div></div>
               <div></div>
               <div className={Styles.left}>
               <FontAwesomeIcon icon={faAtom} className={Styles.con} />
                   <p>STAGE 4</p>  
                   <ul>
                       <li><FontAwesomeIcon icon={faWaveSquare} className={Styles.map} /> Public Listing on CMC</li>
                    </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
               </div>
               <div></div>
               <div></div>
               <div className={Styles.right}>
               <FontAwesomeIcon icon={faAtom} className={Styles.con} />
                   <p>STAGE 5</p>  
                   <ul>
                       <li><FontAwesomeIcon icon={faWaveSquare} className={Styles.map} /> Partnership with more content creators & Inventors</li>
                       <li><FontAwesomeIcon icon={faWaveSquare} className={Styles.map} /> Staking on our Mainnet</li>
                    </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
               </div>
               <div></div>
               <div></div>
               <div className={Styles.left}>
               <FontAwesomeIcon icon={faAtom} className={Styles.con} />
                   <p>STAGE 6</p>  
                   <ul>
                       <li><FontAwesomeIcon icon={faWaveSquare} className={Styles.map} /> Launch private market place for NFT Antique Arts</li>
                    </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
               </div>
               <div></div>
               <div></div>
               <div className={Styles.right}>
               <FontAwesomeIcon icon={faAtom} className={Styles.con} />
                   <p>STAGE 7</p>  
                   <ul>
                       <li><FontAwesomeIcon icon={faWaveSquare} className={Styles.map} /> Public Market place launch in <a href="https://opensea.io">Opensea.io</a></li>
                    </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
               </div>
               <div></div>
               <div></div>
               <div className={Styles.left}>
               <FontAwesomeIcon icon={faAtom} className={Styles.con} />
                   <p>STAGE 8</p>  
                   <ul>
                       <li><FontAwesomeIcon icon={faWaveSquare} className={Styles.map} /> Partnership with more content creators & investors/Public marketplace launch on binance NFT</li>
                    </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
               </div>
            </div>
        </section>
    )
}

export default index
