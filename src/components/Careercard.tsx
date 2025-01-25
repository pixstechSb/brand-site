import React from 'react';


 interface CareerCardProps {
    icon: string;
    title: string;
    description: string;
    type: string;
    iconAlt: string;
    timeIcon: string;
  }

const CareerCard: React.FC<CareerCardProps> = ({
  icon,
  title,
  description,
  type,
  iconAlt,
  timeIcon
}) => {
  const cardStyle = {
    'Experienced': 'cardExperienced',
    'Early Bird': 'cardEarlyBird',
    'Internship': 'cardInternship'
  }[title];

  return (
    <div className={`${'Career-card'} ${cardStyle}`}>
      <img loading="lazy" src={icon} className="Career-icon" alt={iconAlt} />
      <div className="Career-content">
        <div className="Career-textContent">
          <div className="Career-title">{title}</div>
          <div className="Career-description">{description}</div>
        </div>
        <div className="Career-footer">
          <div className="Career-type">{type}</div>
          <div className="Career-timeIconWrapper">
            <img loading="lazy" src={timeIcon} className="Career-timeIcon" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;