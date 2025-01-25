import React from 'react';
import ContactInfo  from './Contactinfo';
import FormField from './Formfield'; 
import '../style.css';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-leftSection">
        <h1 className="contact-heading">Get in Touch</h1>
        <div className="contact-infoContainer">
          <div className="contact-separator" />
          <ContactInfo
            email="info@pixstech.com"
            phone="+91 9841 3077 95"
            address="Plot No 52, 1st Floor, Bala Kumaran Nagar, Part - B Kolathur, Chennai 600099, Tamil Nadu, India"
          />
        </div>
      </div>
      
      <div className="formSection">
        <div className="formContent">
          <div className="formHeader">
            <div className="formTitle">
              <span>Say hello</span> 
              <div className="contactsvg">
              <svg   width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 2610602">
<path id="path88" d="M24.3018 28.684H12.3764" stroke="#BEB8B4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="path90" d="M22.834 8.8251L6.92998 16.8891" stroke="#BEB8B4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="path92" d="M6.92969 1L1.00036 10.6987" stroke="#BEB8B4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg></div>

            </div>
            <p className="formDescription">
              Your email address will not be published. Required fields are marked
            </p>
          </div>
          
          <form className="contactForm">
            <div className="formFields">
              <FormField label="Your Name" isRequired={true} />
              <FormField label="Email ID" type="email" isRequired={true} />
              <FormField label="Message" isRequired={true} />
            </div>
            <button type="submit" className="contact-submitButton">
              Send Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact ;