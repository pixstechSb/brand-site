import React, { useState } from 'react';
import Servicecard from './Servicecard';
import '../style.css';

interface ServiceData {
  icon: React.ReactNode;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export const Services: React.FC = () => {
  const services: ServiceData[] = [
    {
      icon: (  <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="airplay">
            <path id="Vector" d="M10.5 34.5H8.5C7.43913 34.5 6.42172 34.0786 5.67157 33.3284C4.92143 32.5783 4.5 31.5609 4.5 30.5V10.5C4.5 9.43913 4.92143 8.42172 5.67157 7.67157C6.42172 6.92143 7.43913 6.5 8.5 6.5H40.5C41.5609 6.5 42.5783 6.92143 43.3284 7.67157C44.0786 8.42172 44.5 9.43913 44.5 10.5V30.5C44.5 31.5609 44.0786 32.5783 43.3284 33.3284C42.5783 34.0786 41.5609 34.5 40.5 34.5H38.5" fill="url(#paint0_linear_148_156)"/>
            <path id="Vector_2" d="M24.5 30.5L34.5 42.5H14.5L24.5 30.5Z" fill="url(#paint1_linear_148_156)"/>
        </g>
        <defs>
            <linearGradient id="paint0_linear_148_156" x1="15.2119" y1="-1.29381" x2="69.7861" y2="18.1962" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A18FA"/>
                <stop offset="0.45" stop-color="#F30796"/>
                <stop offset="1" stop-color="#7D6559"/>
            </linearGradient>
            <linearGradient id="paint1_linear_148_156" x1="19.856" y1="27.1598" x2="52.3631" y2="31.5582" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A18FA"/>
                <stop offset="0.45" stop-color="#F30796"/>
                <stop offset="1" stop-color="#7D6559"/>
            </linearGradient>
        </defs>
    </svg> ),
      title: "Testing",
      description: "Unleash the power of precision with our Manual/Automation/Embedded Testing."
    },
    {
      icon: (<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="sap 2" clip-path="url(#clip0_309_498)">
        <g id="Vector">
        <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#007CC5"/>
        <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="url(#paint0_linear_309_498)"/>
        </g>
        <path id="Vector_2" d="M12 16.8694V31.1306H26.5697L40.8281 16.8694H12ZM15.9197 19.5216H15.9263C16.9627 19.5216 18.2259 19.8164 19.14 20.2819L18.1556 21.9994C17.1525 21.5156 16.6486 21.4688 16.0781 21.4388C15.2278 21.3919 14.8003 21.697 14.7938 22.0247C14.7853 22.4241 15.5967 22.7855 16.3617 23.0311C17.5195 23.3991 18.9914 23.8903 19.2164 25.3139L21.3328 19.7189H23.7914L26.2702 26.4178L26.2608 19.7213H29.1094C31.8206 19.7213 33.0938 20.6391 33.0938 22.7461C33.0938 24.638 31.7812 25.7658 29.5664 25.7658H28.6495L28.6406 28.2825L24.3281 28.2783L24.0291 27.1875C23.5509 27.3404 23.0517 27.4168 22.5497 27.4139C22.035 27.4172 21.5232 27.3361 21.0347 27.1739L20.6039 28.2774L18.2016 28.2849L18.3094 27.7299C18.2752 27.7599 18.2423 27.7903 18.2053 27.8194C17.5631 28.335 16.755 28.5745 15.7594 28.5924H15.5025C14.3583 28.5924 13.3514 28.3214 12.4027 27.7824L13.2797 26.0424C14.2294 26.6049 14.8266 26.7305 15.6286 26.7131C16.0453 26.7047 16.3467 26.6288 16.5436 26.4258C16.6588 26.3064 16.7256 26.1486 16.7311 25.9828C16.7391 25.5309 16.0955 25.3186 15.308 25.0749C14.6695 24.877 13.9448 24.6061 13.3781 24.1922C12.7073 23.6986 12.3881 23.0817 12.4041 22.2108C12.4077 21.592 12.6512 20.9986 13.0833 20.5556C13.7072 19.9106 14.7127 19.5188 15.9211 19.5188L15.9197 19.5216ZM28.6486 21.5278V23.8153H29.2744C30.1078 23.8153 30.7744 23.5378 30.7744 22.6566C30.7744 21.8053 30.1092 21.5274 29.2744 21.5274L28.6486 21.5278ZM22.5398 22.4489L21.6412 25.2867C21.932 25.3939 22.2398 25.4478 22.5497 25.4456C22.853 25.4464 23.1542 25.3954 23.4403 25.2947L22.5558 22.4489H22.5398Z" fill="white"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_309_498" x1="12.8543" y1="-13.3608" x2="82.3526" y2="4.01309" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4A18FA"/>
        <stop offset="0.45" stop-color="#F30796"/>
        <stop offset="1" stop-color="#7D6559"/>
        </linearGradient>
        <clipPath id="clip0_309_498">
        <rect width="48" height="48" fill="white"/>
        </clipPath>
        </defs>
        </svg> ),
      title: "SAP",
      description: "Crafting delightful experiences, one pixel at a time. Elevate your digital presence with our UI/UX magic."
    },
    {
      icon: ( <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="database">
        <path id="Vector" d="M24.5 16.5C34.4411 16.5 42.5 13.8137 42.5 10.5C42.5 7.18629 34.4411 4.5 24.5 4.5C14.5589 4.5 6.5 7.18629 6.5 10.5C6.5 13.8137 14.5589 16.5 24.5 16.5Z" fill="url(#paint0_linear_148_172)"/>
        <path id="Vector_2" d="M42.5 24.5C42.5 27.82 34.5 30.5 24.5 30.5C14.5 30.5 6.5 27.82 6.5 24.5" fill="url(#paint1_linear_148_172)"/>
        <path id="Vector_3" d="M6.5 10.5V38.5C6.5 41.82 14.5 44.5 24.5 44.5C34.5 44.5 42.5 41.82 42.5 38.5V10.5" fill="url(#paint2_linear_148_172)"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_148_172" x1="16.1407" y1="1.15979" x2="51.5857" y2="27.7425" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4A18FA"/>
        <stop offset="0.45" stop-color="#F30796"/>
        <stop offset="1" stop-color="#7D6559"/>
        </linearGradient>
        <linearGradient id="paint1_linear_148_172" x1="16.1407" y1="22.8299" x2="33.182" y2="48.3908" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4A18FA"/>
        <stop offset="0.45" stop-color="#F30796"/>
        <stop offset="1" stop-color="#7D6559"/>
        </linearGradient>
        <linearGradient id="paint2_linear_148_172" x1="16.1407" y1="1.03608" x2="67.8958" y2="14.7354" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4A18FA"/>
        <stop offset="0.45" stop-color="#F30796"/>
        <stop offset="1" stop-color="#7D6559"/>
        </linearGradient>
        </defs>
        </svg>),
      title: "Data Analytics",
      description: "The process of examining raw data to find patterns, draw conclusions and make informed decisions.",
      isHighlighted: true
    },
    {
      icon: (<svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="cloud">
        <path id="Vector" d="M63.0004 35H58.5904C57.2809 29.9285 54.5752 25.326 50.7806 21.7154C46.9861 18.1048 42.2549 15.631 37.1246 14.575C31.9943 13.519 26.6707 13.9231 21.7587 15.7416C16.8466 17.56 12.5431 20.7198 9.33717 24.8618C6.13121 29.0039 4.15135 33.9622 3.62256 39.1732C3.09377 44.3843 4.03725 49.6392 6.3458 54.3409C8.65435 59.0425 12.2354 63.0024 16.682 65.7705C21.1286 68.5386 26.2626 70.0039 31.5004 70H63.0004C67.6417 70 72.0929 68.1563 75.3748 64.8744C78.6566 61.5925 80.5004 57.1413 80.5004 52.5C80.5004 47.8587 78.6566 43.4075 75.3748 40.1256C72.0929 36.8437 67.6417 35 63.0004 35Z" fill="url(#paint0_linear_148_124)"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_148_124" x1="24.1056" y1="-1.58763" x2="113.979" y2="0.249197" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4A18FA"/>
        <stop offset="0.45" stop-color="#F30796"/>
        <stop offset="1" stop-color="#7D6559"/>
        </linearGradient>
        </defs>
        </svg>),
      title: "Cloud",
      description: "Soar above the competition with our cloud solutions. Reach new heights of efficiency, scalability, and innovation in the digital sky."
    },

  ];

  

  const [currentIndex, setCurrentIndex] = useState(0); 

  const handleNext = () => {
    if (currentIndex < services.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };


  return (
    <section className="service-container">
      <div className="service-header">
        <h1 className="service-title">Our Services</h1>
        <div className="service-navigation">
          <button onClick={handlePrevious} className="service-navButton" disabled={currentIndex === 0}>
          <svg width="92" height="93" viewBox="0 0 92 93" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="arrow-left-circle">
<path id="Vector" d="M46.1669 84.5555C67.1844 84.5555 84.2224 67.5175 84.2224 46.5C84.2224 25.4825 67.1844 8.4444 46.1669 8.4444C25.1494 8.4444 8.11133 25.4825 8.11133 46.5C8.11133 67.5175 25.1494 84.5555 46.1669 84.5555Z" stroke="#BEB8B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M46.1666 31.2778L30.9443 46.5L46.1666 61.7222" stroke="#BEB8B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M61.3888 46.5H30.9443" stroke="#BEB8B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
          </button>
          <div className="service-pageIndicator">
            <span>{currentIndex + 1}</span>/{services.length}
          </div>
          <button onClick={handleNext} className="service-navButton" disabled={currentIndex === services.length - 1}>
          <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="arrow-right-circle">
<path id="Vector" d="M46.4999 84.5555C67.5174 84.5555 84.5555 67.5175 84.5555 46.5C84.5555 25.4825 67.5174 8.4444 46.4999 8.4444C25.4824 8.4444 8.44434 25.4825 8.44434 46.5C8.44434 67.5175 25.4824 84.5555 46.4999 84.5555Z" stroke="#BEB8B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M46.5 61.7222L61.7222 46.5L46.5 31.2778" stroke="#BEB8B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M31.2773 46.5H61.7218" stroke="#BEB8B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
          </button>
        </div>
      </div>
      <div className="servicesGrid">
        {services.map((service, index) => (
          <Servicecard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            isHighlighted={index === currentIndex} // Highlight based on current index
          />
        ))}
      </div>
    </section>
  );
};

export default Services;