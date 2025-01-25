import React from 'react';
import '../style.css';

interface ServicesHeaderProps {
  current: number;
  total: number;
  onNext: () => void;
  onPrevious: () => void;
}

const ServicesHeader: React.FC<ServicesHeaderProps> = ({ current, total, onNext, onPrevious }) => (
  <div className={"service-header"}>
    <h1 className={"service-title"}>Our Services</h1>
    <div className={"service-navigation"}>
      <button onClick={onPrevious} className={"service-navButton"}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9bf28ace8cb8b063bb8e07d76d77608e89a03e9939aa1ef099cc97ecedd7d34?placeholderIfAbsent=true&apiKey=96b83855ebaf4805906bae67b4a2ea76" alt="Previous service" />
      </button>
      <div className={"service-counter"}>
        <span className={"service-currentCount"}>{current}</span>/{total}
      </div>
      <button onClick={onNext} className={"service-navButton"}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/964d51dcb4a9f42aedabb4dbb4d1f45ea95fbaabf5d16a93587b2dae61d8b9f6?placeholderIfAbsent=true&apiKey=96b83855ebaf4805906bae67b4a2ea76" alt="Next service" />
      </button>
    </div>
  </div>
);

export default ServicesHeader;