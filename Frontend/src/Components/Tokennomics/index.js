import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFire, faChartBar, faChartPie } from '@fortawesome/free-solid-svg-icons'
import H3 from '../H3'
import ParentStyles from "../../css/styles.module.css"
import Styles from "./css/styles.module.css"
const index = () => {
    const data = [
        {
            id : 1,
            title : "Circulating Supply",
            comment: "500,000,000",
            icon: `${faChartBar}`
        },
        {
            id : 2,
            title : "Holders",
            comment: "3,000",
            icon: `${faUser}`
        },
        {
            id : 3,
            title : "Max Supply",
            comment: "1,000,000,000",
            icon: `${faChartPie}`
        },
        {
            id : 4,
            title : "Total Supply",
            comment: "1,000,000,000",
            icon: `${faChartPie}`
        },
        {
            id : 5,
            title : "MARKET CAP",
            comment: "?",
            icon: `${faFire}`
        },
    ]
    return (
        <section  className={Styles.tokenomics} id="tokens">
            
            <div className={`${ParentStyles.myContainer} ${Styles.inner}`}>
            <H3 content="TOKENOMICS"/>
                <div className={Styles.maped}>
                    {data.map((token)=> (
                        <div key={token.id} className={Styles.key}>
                            <div className={Styles.icon}>
                                <FontAwesomeIcon icon={faFire} className={Styles.con} />
                            </div>
                            <div className={Styles.pic}>
                                <p className={Styles.big}>{token.title}</p>
                                <p className={Styles.fade}>{token.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default index
