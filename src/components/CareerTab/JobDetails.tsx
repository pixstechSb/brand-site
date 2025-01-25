import React from 'react';
import "../../style.css";

export const JobDetails: React.FC = () => {

    const JobDetailItem=({ icon, title, children }: { icon: string; title: string ;children: React.ReactNode}) =>(
        <div className="detailContainer">
      <div className="detailHeader">
        <img loading="lazy" src={icon} alt="" className="detailIcon" />
        <div className="detailTitle">{title}</div>
      </div>
      {children}
    </div>
    );

    const SalaryRange=({  min, max, period }: { min: string; max: string ;period:string}) =>(
        <div className="salaryContainer">
      <div className="salaryRange">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7187a6629a26d54a6f760ed6f29af6094c036d9b6b6751928bf07abf2ad0d4e9?placeholderIfAbsent=true&apiKey=54a7534eddb644558f08fe14efe56baf" alt="" className="currencyIcon" />
        <div className="amount">{min} -</div>
      </div>
      <div className="salaryRange">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7187a6629a26d54a6f760ed6f29af6094c036d9b6b6751928bf07abf2ad0d4e9?placeholderIfAbsent=true&apiKey=54a7534eddb644558f08fe14efe56baf" alt="" className="currencyIcon" />
        <div className="amount">{max} {period}</div>
      </div>
    </div>
    )

  return (
    <div className="Jobdetail-container">
      <div className="Jobdetail-header">
        <div className="Jobdetail-titleSection">
          <h1 className="Jobdetail-title">UI/UX Design</h1>
          <div className="Jobdetail-company">Pixs technology solutions</div>
        </div>
        <button className="applyButton">Apply Now</button>
      </div>
      <div className="Jobdetail-content">
        <div className="Jobdetail-contentHeader">
          <h2 className="Jobdetail-sectionTitle">Job details</h2>
          <p className="Jobdetail-subtitle">Here's how the job details align with your Profile</p>
        </div>
        
        <div className="detailsSection">
          <JobDetailItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/07d8f7754e5ef499f624d3f4c8f081f63e2f0a3137379ffb3623c879824c2e1e?placeholderIfAbsent=true&apiKey=54a7534eddb644558f08fe14efe56baf" title="Pay">
            <SalaryRange min="40,000" max="50,000" period="a month" />
          </JobDetailItem>

          <JobDetailItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/efd2dbbf0f7725fd9c30fee848c13e3aaf988b929251a823f6dab672fc6edfa2?placeholderIfAbsent=true&apiKey=54a7534eddb644558f08fe14efe56baf" title="Job type">
            <div className="badge">Full time</div>
          </JobDetailItem>

          <JobDetailItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d187b217a2e27dc0863ea256472dabc4c8156a103b6951e1bdeab225be140ee2?placeholderIfAbsent=true&apiKey=54a7534eddb644558f08fe14efe56baf" title="Shift and schedule">
            <div className="badge">Monday to friday</div>
          </JobDetailItem>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;