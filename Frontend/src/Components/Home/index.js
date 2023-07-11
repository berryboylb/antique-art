import { useState } from "react"
import NavBar from "../Navbar/Index"
import Banner from "../Banner/Index"
import About from "../About"
import Tokenomics from "../Tokennomics"
import Accessbility from "../Accessibility"
import Roadmap from "../Roadmap"
import Footer from "../Footer"
import Popup from "../Popup/Index"
import FAQ from "../FAQ/Index"
import Presale from "../Presale/Index"
import Airdrop from "../Airdrop/Index"
const Index = () => {
    const [popUp, setPopUp] = useState(false);
    const handlePopUp = () => {
        setPopUp(!popUp)
    }

    const [presale, setPresale] = useState(false);
    const handlePresale = () => {
        setPresale(!presale)
    }

    const [airdrop, setAirdrop] = useState(false);
    const handleAirdrop = () => {
        setAirdrop(!airdrop)
    }

    const [data, setData] = useState('');
    //let data = '';
    const childToParent = (childData) => {
        setData(childData)
    }

    // const watch = () => {
    //     if (data) {
    //         console.log(data)
    //     }else {
    //         console.log('empty string')
    //     }
    // }

    // watch();

    return (
        <div>
            <NavBar handlePopUp ={handlePopUp} data = {data}/>
            <Banner/>
            <About/>
            <Accessbility/>
            <Tokenomics/>
            <Roadmap/>
            <FAQ/>
            <Footer handlePresale= {handlePresale} handleAirdrop = {handleAirdrop} />
            {popUp && <Popup handlePopUp ={handlePopUp} childToParent={childToParent} />}
            {presale && <Presale data = {data} handlePresale= {handlePresale}/>}
            {airdrop && <Airdrop data = {data} handleAirdrop= {handleAirdrop}/>}
        </div>
    )
}

export default Index
