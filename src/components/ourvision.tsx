import React from 'react';
import VisionItem from './visionitem'; 
const Ourvision: React.FC = () => {
  return (
    <div id="our-vision" className="vision-container">
      <div className="vision-left-column">
        <div className="vision-header">Our Vision</div>
        <div className="vision-content">
          <div className="vision-title">
            Our Vision is to Add Values, Better Experience & Satisfaction
          </div>
          <div className="vision-description">
            Pioneering excellence, one moment at a time - join us on our journey to transform everyday experiences into extraordinary ones!
          </div>
        </div>
      </div>
      <div className="vision-right-column">
        <VisionItem 
          title="Harmonizing the Virtual Work-Life Equation"
          description="Pioneering excellence, one moment at a time - join us on our journey to transform everyday experiences into extraordinary ones!"
        />
        <VisionItem 
          title="Robust Skilled Sparks: Igniting Excellence"
          description="Elevate your business to new heights with our RSS-delivering Innovative solutions to boost operations and revenue, shifting you to the next level"
        />
        <VisionItem 
          title="Empowering Tomorrow: Modern Technology Solutions Today."
          description="Embrace the Future Our belief in MTs ensures services and solution are easier and more reliable, shaping tomorrow's possibilities."
        />
      </div>
    </div>
  );
};

export default Ourvision;