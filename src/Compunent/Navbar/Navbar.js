import React, { useState } from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    const[isMobile,setIsMobile] = useState(false);


  return (
    <nav className="navbar">
        <h3 className="logo">Logo</h3>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
            <Link to ="/" className="home">
                <li>Home</li>
            </Link>
            <Link to ="/About" className="about">
                <li>About</li>
            </Link>
            <Link to ="/Contatc" className="contact">
                <li>Contact</li>
            </Link>
            <Link to ="/Skill" className="skill">
                <li>Skill</li>
            </Link>
            <Link to ="/Signup" className="signup">
                <li>Sign Up</li>
            </Link>
            
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (<i className="fas fa-times"></i> 
            ):
            (<i className=" fas fa-bars"></i>)}
        </button>
    </nav>
  )
}

export default Navbar
