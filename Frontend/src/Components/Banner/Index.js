
import Styles from "./css/styles.module.css"
import ParentStyles from "../../css/styles.module.css"
import H1 from "../H1"
import H3 from "../H3/index"
import P from "../P"

const Index = () => {
    const header = "Antique Art";
    const pargraph = "Power of Creation and Individualism are handed over to every single Individual to experience and take part in sharing collectible antique object such as pieces of furniture or a unique artwork beacause of it's age and quality"
    return (
        <section className={Styles.banner} id="section-one-wrapper">
          <div className={`${ParentStyles.myContainer} ${Styles.inner}`}>
              <div className={Styles.con}>
                  <div className={Styles.num1}>
                      <H3 content="NFT"/>
                      <H1 content={header} />
                  </div>

                  <div className={Styles.num2}>
                      <P content={pargraph}/>
                  </div>
              </div>
              <div  className={Styles.imgCon}>
                <lottie-player src="https://assets5.lottiefiles.com/datafiles/B8q1AyJ5t1wb5S8a2ggTqYNxS1WiKN9mjS76TBpw/articulation/articulation.json" background="transparent"  speed="1"   loop  autoplay></lottie-player>
              </div>
          </div>
        </section>
    )
}

export default Index
