import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import H1 from '../H1'
import P from '../P'
import ParentStyles from "../../css/styles.module.css"
import Styles from "./css/styles.module.css"

const index = () => {
    const paragraph = "Create, Collect & Trade digital Anitque Unique Asset. NFT Antique art is collected or desirable because of it's age, beauty, price, utility,  personal emotional corection and/or other unique features. But the world moving into digitalization, we revolutionalize it to be easily accessed Unique & also to represent a previous era or time period in human history."
    const header2 ="NFT Antique And ECO System"
    const paragraph2 ="From Blockhain Technology we are currently in support of Smartchain, Ethereum and Blockchain Network."
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  

    return (
        <section className={Styles.access} id="access">
            <div className={`${ParentStyles.myContainer} ${Styles.inner}`}>
                <div className={Styles.prawn}>
                <div className={`${Styles.louis} ${Styles.hide}`}>
                      <H1 content="Accessibility" />
                      <P content= {paragraph}/>
                    </div>
                  <div className={Styles.lotCon}>
                    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_spaegkn6.json" background="transparent"  speed="1"   loop  autoplay></lottie-player>
                  </div>
                    <div className={`${Styles.louis} ${Styles.show}`}>
                      <H1 content="Accessibility" />
                      <P content= {paragraph}/>
                    </div>
                </div>

                <div className={Styles.prawn}>
                  <div className={Styles.louis}>
                    <H1 content={header2} />
                    <P content= {paragraph2}/>
                  </div>
                  <div className={Styles.lotCon}>
                    <lottie-player src="https://assets10.lottiefiles.com/temp/lf20_DGLtjO.json" background="transparent"  speed="1"   loop  autoplay></lottie-player>
                  </div>
                </div>

                        <Carousel  className={Styles.slidee}
                            responsive={responsive}
                            arrows ={false}
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            // removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            >
                            <div><img src="/smartchain.jpeg" alt="smartchain" className="glider-img" /></div>
                            <div><img src="/eth.svg" alt="Ethereum" className="glider-img" /></div>
                        </Carousel>
            </div>
        </section>
    )
}

export default index
