import React from 'react';
import ContactInfo  from './Contactinfo';
import FormField from './Formfield'; 
import '../style.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
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
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f28775cf8ec82e3b7aaec9ffd0f35bdac5f65e2c8648eeda6b2b99694128e355?placeholderIfAbsent=true&apiKey=96b83855ebaf4805906bae67b4a2ea76"
                className="contact-helloIcon"
                alt=""
                aria-hidden="true"
              />
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