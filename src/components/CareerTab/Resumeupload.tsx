import React from 'react';
import "../../style.css";

 interface ResumeUploadProps {
    onUpload: (file: File) => void;
  }

export const ResumeUpload: React.FC<ResumeUploadProps> = ({ onUpload }) => {
  return (
    <div className="Resume-uploadContainer">
      <div className="Resume-uploadWrapper">
        <label htmlFor="resumeUpload" className="Resume-resumeLabel">
          Resume <span className= "Resume-required">*</span>
        </label>
        <button 
          className="Resume-browseButton"
          onClick={() => document.getElementById('resumeUpload')?.click()}
          tabIndex={0}
          aria-label="Browse for resume"
        >
          Browse
        </button>
        <input
          type="file"
          id="resumeUpload"
          className= "Resume-hiddenInput"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onUpload(file);
          }}
          accept=".pdf,.doc,.docx"
          aria-label="Upload resume"
        />
      </div>
    </div>
  );
};

export default ResumeUpload;