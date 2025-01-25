import React from 'react';
import Logo from '../assets/Logo.png';
import '../style.css';
import { Link } from 'react-router-dom';

const Navigationbar: React.FC = () => {
    return (
      <div className="Navbar">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="Logo" />
          <span className="MainText">PIXS</span>
        </div>
        <div className="nav-items">
        <Link to="/aboutus">About Us</Link>
          <Link to="/ourvision">Our Vision</Link>
          <Link to="/services"> Services</Link>
          <Link to="/careerssection">Careers</Link>
          <Link to="/contactus">Contact Us</Link>
        </div>
        <button className="contact-button">
          Get in Touch
        </button>
      </div> 
    );
  }
  
  export default Navigationbar;