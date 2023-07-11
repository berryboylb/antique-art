import ParentStyles from "../../css/styles.module.css"
import Styles from "./css/styles.module.css"
const index = () => {
    const paragraph = `We are here and our team working effortlessly to bring and synergize
    the memories & uniqueness behind the ancient antique collections with the present, now and world of art.`
    const paragraph1 = `We are taking the step as being the first to introduce a NFT project based on Ancient Antique
    art and also working on developing a chain connection between various NFT and project which potrays Timeless value
    uniqueness and worth in the future of the NFT World.`
    return (
        <section className={Styles.about} id="about">
            <div className={`${ParentStyles.myContainer} ${Styles.inner}`}>
                <div className={Styles.who}>
                <div className={`${Styles.content} ${Styles.hide}`}>
                        <h3>Who we are</h3>
                        <p>{paragraph}</p>
                    </div>
                    <div className={Styles.lottie}>
                        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_yJ8wNO.json" background="transparent"  speed="1"   loop  autoplay></lottie-player>
                    </div>
                    <div className={`${Styles.content} ${Styles.show}`}>
                        <h3>Who we are</h3>
                        <p>{paragraph}</p>
                    </div>
                </div>

                <div className={Styles.aim}>
                    <div className={Styles.content}>
                        <h3>Our Aim</h3>
                        <p>{paragraph1}</p>
                    </div>
                    <div className={Styles.lottie}>
                        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_yjpk1p2v.json" background="transparent"  speed="1"   loop  autoplay></lottie-player>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index
