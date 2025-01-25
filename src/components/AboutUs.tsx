import React from 'react';
import '../style.css';

const AboutUs: React.FC = () => {
  return (
    <div id="about-us" className="aboutus-container">
      <div className="aboutus-left-column">
        <div className="aboutus-header">About us</div>
        <div className="aboutus-content">
          <div className="aboutus-text-section">
            <div className="aboutus-gradient-bar" />
            <div className="aboutus-text">
              From a dream to reality, our journey began with a vision to service people worldwide, providing aspiring services for a truly stratifying experience
            </div>
          </div>
          <div className="aboutus-embrace-section">
            <div className="aboutus-embrace-text">
              <span className="aboutus-bold-text">Embrace the evolution </span>
              <span className="aboutus-light-text">Experience transformation, propel your business into its next phase, and modernize with cutting-edge cloud technology</span>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutus-right-column">
        <div className="aboutus-journey-button">
          <div className="aboutus-journey-text">Our Journey</div>
        </div>
        <div className="aboutus-right-content">
          <div className="aboutus-aspiring-button">
            <div className="aboutus-aspiring-text">Aspiring Services</div>
          </div>
          <div className="aboutus-experience-button">
            <div className="aboutus-experience-text">Stratifying Experience</div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default AboutUs;