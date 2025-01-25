import React from 'react';
import Dropdown from './Dropdown';
import DesignHeader from './DesignHeader';


const ExperienceOptions = ["0-1 Years", "1-2 Years", "2-3 Years", "3-5 Years", "5+ Years"];
const NoticePeriodOptions = ["Immediate", "1 Month", "2 Months", "3 Months", "Negotiable"];
const OfferInHandOptions = ["Yes", "No"];
const CareergapOptions = ["6 Months", "less than 5 years", "More than 10 years"];

const ExperienceForm: React.FC = () =>  {
    const handleExperienceSelect = (value: string) => {
        console.log(`Selected experience: ${value}`);
      };
    
      const handleNoticePeriodSelect = (value: string) => {
        console.log(`Selected notice period: ${value}`);
      };
    
      const handleOfferInHandSelect = (value: string) => {
        console.log(`Selected offer in hand: ${value}`);
      };

      const handlecareergapSelect = (value: string) => {
        console.log(`Selected career gap: ${value}`);
      };

  return (
    <div>
      <DesignHeader/>
 
   
    <div className="Expform-container">
          <div className="Expform-content">
        {/* First Row */}
        <div className="Expform-fieldRow">
          <div className="Expform-field">
            <span className="Expform-label">
              First Name <span className="Expform-highlight" >*</span>
            </span>
          </div>
          <div className="Expform-field">
            <span className="Expform-label">
              Last Name <span className="Expform-highlight">*</span>
            </span>
          </div>
        </div>
        
        {/* Second Row */}
        <div className="Expform-fieldRow">
          <div className="Expform-field">
            <span className="Expform-label">
              Date of Birth <span className="Expform-highlight">*</span>
            </span>
          </div>
          <div className="Expform-field">
            <span className="Expform-label">
              Email id <span className="Expform-highlight">*</span>
            </span>
          </div>
        </div>

        <div className="Expform-fieldRow">
          <div className="Expform-field">
            <span className="Expform-label">
             Contact Number <span className="Expform-highlight">*</span>
            </span>
          </div>
          <div className="Expform-field">
            <span className="Expform-label">
              City<span className="Expform-highlight"></span>
            </span>
          </div>
        </div>

        <div className="Expform-fieldRow">
          <div className="Expform-field">
            <span className="Expform-label">
             Graduation <span className="Expform-highlight">*</span>
            </span>
          </div>
          <div className="Expform-field">
          <Dropdown
          label="Experience"
        options={ExperienceOptions}
        onSelect={handleExperienceSelect}
      />
          </div>
        </div>

        <div className="Expform-fieldRow">
          <div className="Expform-field">
          <Dropdown
        label="Career Gap"
        options={CareergapOptions}
        onSelect={handlecareergapSelect}
      />
          </div>
          <div className="Expform-field">
          <Dropdown
        label="Notice Period"
        options={NoticePeriodOptions}
        onSelect={handleNoticePeriodSelect}
      />
          </div>
        </div>

        <div className="Expform-fieldRow">
          <div className="Expform-field">
            <span className="Expform-label">
             CTC <span className="Expform-highlight">*</span>
            </span>
          </div>
          <div className="Expform-field">
          <Dropdown
        label="Offer in Hand"
        options={OfferInHandOptions}
        onSelect={handleOfferInHandSelect}
      />
          </div>
        </div>

        <div className="Expform-fieldRow">
          <div className="Expform-field">
            <span className="Expform-label">
             Offered CTC<span className="Expform-highlight">*</span>
            </span>
          </div>
          <div className="Expform-field">
            <span className="Expform-label">
              Expected CTC<span className="Expform-highlight">*</span>
            </span>
          </div>
        </div>

        {/* Footer Section */}
        <div className="Expform-footer">
          <div className={`${"Expform-button"} ${"Expform-button-cancel"}`}>
            <span>Cancel</span>
          </div>
          <div className={`${"Expform-button"} ${"Expform-button-primary"}`}>
            <span>Submit</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ExperienceForm;