import React from 'react';
import '../../style.css';


export const ProgressBar: React.FC = () => {

  return (
    <div className= "progress-container">
     <div>
     <button>
     <svg width="92" height="93" viewBox="0 0 92 93" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="arrow-left-circle">
<path id="Vector" d="M46.1669 84.5555C67.1844 84.5555 84.2224 67.5175 84.2224 46.5C84.2224 25.4825 67.1844 8.4444 46.1669 8.4444C25.1494 8.4444 8.11133 25.4825 8.11133 46.5C8.11133 67.5175 25.1494 84.5555 46.1669 84.5555Z" stroke="#BEB8B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M46.1666 31.2778L30.9443 46.5L46.1666 61.7222" stroke="#BEB8B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M61.3888 46.5H30.9443" stroke="#BEB8B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
</button>
</div>
<div>
<button>
<svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="arrow-right-circle">
<path id="Vector" d="M46.4999 84.5555C67.5174 84.5555 84.5555 67.5175 84.5555 46.5C84.5555 25.4825 67.5174 8.4444 46.4999 8.4444C25.4824 8.4444 8.44434 25.4825 8.44434 46.5C8.44434 67.5175 25.4824 84.5555 46.4999 84.5555Z" stroke="#BEB8B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M46.5 61.7222L61.7222 46.5L46.5 31.2778" stroke="#BEB8B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M31.2773 46.5H61.7218" stroke="#BEB8B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
</button>
     </div>
      <div className="progress-lineContainer">
        <div className="progress-backgroundLine"/>
        <div className="progressLine" />
      </div>
    </div>
  );
};

export default ProgressBar;