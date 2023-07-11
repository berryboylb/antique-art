import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-scroll";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import "./css/styles.css"

const Index = ({ handlePopUp, data}) => {
    const location = useLocation();
    const [mobileNav, setmobileNav] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    let charedAddress = '';
    const handleMobileNav = () => {
        if(isMobile){
            setmobileNav(!mobileNav);
        }
    }

    if(data){
        charedAddress = data.substring(0, 2) + '...' + data.substring(data.length - 4)
    }

   
    return (
        <nav>
           <div className="logo">
              <Link to = "/"><img src="./logoblue.png" alt="logo"/></Link>
           </div>
           <ul className={mobileNav ? "nav-active" : "nav-links"}>
                <li><Link onClick={handleMobileNav} to = "section-one-wrapper" activeClass="active" spy={true} smooth={true} className = {location.pathname === "/" ? "activate" : ""}>HOME</Link></li>
                <li><Link onClick={handleMobileNav} to = "about" activeClass="active" spy={true} smooth={true} className ={location.pathname === "/services" ? "activate" : ""}>ABOUT</Link></li>
                <li><Link onClick={handleMobileNav} to = "tokens" activeClass="active" spy={true} smooth={true} className ={location.pathname === "/services" ? "activate" : ""}>TOKENOMICS</Link></li>
                <li><Link onClick={handleMobileNav} to = "access" activeClass="active" spy={true} smooth={true} className ={location.pathname === "/about us" ? "activate" : ""}>ACCESSBILITY</Link></li>
                <li><Link onClick={handleMobileNav} to = "road" activeClass="active" spy={true} smooth={true} className ={location.pathname === "/blog" ? "activate" : ""}>ROADMAP</Link></li>
                <li className="login"><Link onClick={handleMobileNav} to = "FAQ" activeClass="active" spy={true} smooth={true} className ={location.pathname === "/contact us" ? "activate" : ""}>FAQ</Link></li>
                <li className="request">{data ? <div onChange={() => {handlePopUp()}} className = "address" > <FontAwesomeIcon onClick={handlePopUp} icon={faCheckCircle} className= "icon"  /> {charedAddress}</div> :<button  onClick={()=> {handlePopUp(); handleMobileNav()}} href="#" >Connect</button>}</li>
           </ul>
          
           <div className="pub">
           <div className={mobileNav ? "bro" : "burger"}  onClick={handleMobileNav}>
                <div className="line0"></div>
                <div className="line1"></div>
                <div className="line2"></div>
            </div>
            <div className="mobile-con">
                {data ? <div onChange={() => {handlePopUp()}} className = "address" > <FontAwesomeIcon onClick={handlePopUp} icon={faCheckCircle} className= "icon"  /> {charedAddress}</div> :<button  onClick={()=> {handlePopUp()}} href="#" >Connect</button>}
           </div>
           </div>
        </nav>
    )
}

export default Index
