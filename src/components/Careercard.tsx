import React from 'react';


 interface CareerCardProps {
    icon: React.ReactNode; 
    title: string;
    description: string;
    type: string;
    timeIcon: React.ReactNode;
  }

const CareerCard: React.FC<CareerCardProps> = ({
  icon,
  title,
  description,
  type,
  timeIcon
}) => {
  const cardStyle = {
    'Experienced': 'cardExperienced',
    'Early Bird': 'cardEarlyBird',
    'Internship': 'cardInternship'
  }[title];

  return (
    <div className={`${'Career-card'} ${cardStyle}`}>
      <div className="Career-icon">{icon}</div>
      <div className="Career-content">
        <div className="Career-textContent">
          <div className="Career-title">{title}</div>
          <div className="Career-description">{description}</div>
        </div>
        <div className="Career-footer">
          <div className="Career-type">{type}</div>
          <div className="Career-timeIconWrapper">
            <div className="Career-timeIcon">{timeIcon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;