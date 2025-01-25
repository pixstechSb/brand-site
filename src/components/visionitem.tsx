import React from 'react';

interface VisionItemProps {
  title: string;
  description: string;
}

const VisionItem: React.FC<VisionItemProps> = ({ title, description }) => {
  return (
    <div className="vision-item">
      <div>
        {/* Adding SVG directly here */}
        <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</svg>
      </div>
      <div className="vision-details">
        <div className="vision-title1">{title}</div>
        <div className="vision-description1">{description}</div>
      </div>
    </div>
  );
};

export default VisionItem;