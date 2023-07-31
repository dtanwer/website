import React from 'react'
import './index.css'
import menuIcon from '../../svg/menuIcon.svg';
import crossIcon from '../../img/cross.png';
function Navbar({navBar,setNavBar}) {
  return (
    <div className='navBar'>
        <div className="logo"><img src="https://uploads-ssl.webflow.com/649c42429cb3e7c0fcd4cfe4/64a2950a8e53b9cd0ca3039b_Logo%20White.svg" loading="lazy" width="140.5" alt="logo" className="logo"/></div>
        <div className="links">
        <a href="#" class="navlink" style={{maxWidth: "1000px"}}>About</a>
        <a href="#" class="navlink" style={{maxWidth: "1000px"}}>Features</a>
        <a href="#" class="navlink" style={{maxWidth: "1000px"}}>Pricing</a>
        <a href="#" class="navlink" style={{maxWidth: "1000px"}}>Contact</a>
        <a href="#" class="navlink" style={{maxWidth: "1000px"}}>Blog</a>
        <a href="#" class="navlink" style={{maxWidth: "1000px"}}>Career</a>
        </div>
        <div className="cart">
          <a href="#" class="navlink" style={{maxWidth: "1000px"}}>Cart</a>
          <button>Download</button>
          <div className="menuIcon">
          {/* <MenuIcon className='icon'/> */}
          <img className='icon'src={navBar?crossIcon:menuIcon} alt="" srcset=""  onClick={()=>setNavBar(!navBar)} width={30}/>
          </div>
        </div>
    </div>
  )
}

export default Navbar