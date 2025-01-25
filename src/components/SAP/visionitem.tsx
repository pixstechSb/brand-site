import React from 'react';

interface VisionItemProps {
  title: string;
  description: string;
}

const VisionItem: React.FC<VisionItemProps> = ({ title, description }) => {
  return (
    <div className="vision-item">
      <div className="vision-icon-wrapper">
        <div className="vision-icon-gradient"></div>
      </div>
      <div className="vision-details">
        <div className="vision-title">{title}</div>
        <div className="vision-description">{description}</div>
      </div>
    </div>
  );
};

export default VisionItem;