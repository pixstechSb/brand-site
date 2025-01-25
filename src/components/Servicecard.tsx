import React from 'react';
import '../style.css';

interface ServiceCardProps {
    icon: React.ReactNode; // Accepts any React node, including an SVG
    title: string;
    description: string;
    isHighlighted?: boolean;
  }

export const Servicecard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  isHighlighted
}) => {
  return (
    <div className={isHighlighted ? "service-cardHighlighted" : "service-card"}>
      <div className="service-icon">{icon}</div>
      <div className="service-content">
        <div className="servicetitle">{title}</div>
        <div className= "service-description">{description}</div>
      </div>
      {isHighlighted && (
        <div className= "service-highlightBadge">
          <div className= "service-badgeInner">
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="arrow-up-right">
<path id="Vector" d="M9.83301 22.6667L23.1663 9.33337" stroke="#99969C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M9.83301 9.33337H23.1663V22.6667" stroke="#99969C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
          </div>
        </div>
      )}
    </div>
  );
};
export default Servicecard;