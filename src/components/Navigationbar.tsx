import React from 'react';
import '../style.css';

const Navigationbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };
    return (
      <div className="Navbar">
        <div className="logo-container">
        <svg width="27" height="48" viewBox="0 0 27 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Vector 12">
<path d="M10.5999 0.329164L1.68197 6.16629C1.04227 6.585 1.08998 7.53755 1.76833 7.89024L13.8445 14.1689C14.1755 14.341 14.3832 14.6831 14.3832 15.0561V29.5053C14.3832 30.2435 15.1556 30.7272 15.8198 30.4049L26.4077 25.267C26.7671 25.0926 26.9882 24.721 26.9701 24.3219L26.2685 8.88699C26.2526 8.53887 26.0567 8.2241 25.7514 8.05617L11.6295 0.289639C11.3054 0.111405 10.9094 0.126607 10.5999 0.329164Z" fill="url(#paint0_linear_570_288)"/>
<path d="M9.56414 14.2566L1.45968 10.0617C0.794058 9.71714 0 10.2002 0 10.9498V18.9901C0 19.7245 0.765173 20.2084 1.42867 19.8936L9.53313 16.0482C10.2804 15.6936 10.2987 14.6368 9.56414 14.2566Z" fill="url(#paint1_linear_570_288)"/>
<path d="M10.4388 17.8024L0.831317 22.2619C0.47823 22.4258 0.252336 22.7797 0.252336 23.1689V39.3961C0.252336 39.7233 0.412414 40.0298 0.680945 40.2168L10.2884 46.9059C10.9514 47.3675 11.8598 46.8931 11.8598 46.0852V18.7095C11.8598 17.9788 11.1016 17.4948 10.4388 17.8024Z" fill="url(#paint2_linear_570_288)"/>
</g>
<defs>
<linearGradient id="paint0_linear_570_288" x1="13.5" y1="0" x2="13.5" y2="48" gradientUnits="userSpaceOnUse">
<stop stop-color="#ED0882"/>
<stop offset="1" stop-color="#570832"/>
</linearGradient>
<linearGradient id="paint1_linear_570_288" x1="13.5" y1="0" x2="13.5" y2="48" gradientUnits="userSpaceOnUse">
<stop stop-color="#ED0882"/>
<stop offset="1" stop-color="#570832"/>
</linearGradient>
<linearGradient id="paint2_linear_570_288" x1="13.5" y1="0" x2="13.5" y2="48" gradientUnits="userSpaceOnUse">
<stop stop-color="#ED0882"/>
<stop offset="1" stop-color="#570832"/>
</linearGradient>
</defs>
</svg>
          <span className="MainText">PIXS</span>
        </div>
        <div className="nav-items">
        <button onClick={() => scrollToSection('about-us')}>About Us</button>
        <button onClick={() => scrollToSection('our-vision')}>Our Vision</button>
        <button onClick={() => scrollToSection('services')}>Services</button>
        <button onClick={() => scrollToSection('careers')}>Careers</button>
        <button onClick={() => scrollToSection('contact')}>Contact Us</button>
        </div>
        <button className="contact-button">
          Get in Touch
        </button>
      </div> 
    );
  }
  
  export default Navigationbar;