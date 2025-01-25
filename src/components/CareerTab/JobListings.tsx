import React from 'react';
import JobDetails from './JobDetails';
import SearchBar from './SearchBar';



const BulletPoint= ({ text }:{text: string} ) => (
  <div className="bulletContainer">
    <div className="bulletPoint" />
    <div className="bulletText">{text}</div>
  </div>
)
const JobCard=({ title, location, requirements, imageSrc }:{title:string; location:string; requirements:string[]; imageSrc?:string}) => (
  <div className="jobCardContainer">
    <div className="jobCardContent">
      <div className="jobHeader">
        <h2 className="jobTitle">{title}</h2>
        <p className="jobLocation">{location}</p>
      </div>
      <div className="requirementsList">
        {requirements.map((requirement, index) => (
          <BulletPoint key={index} text={requirement} />
        ))}
      </div>
    </div>
    {imageSrc && (
      <div className="imageContainer">
        <img src={imageSrc} alt="" className="jobImage" />
      </div>
    )}
  </div>
)


const jobListings = [
  {
    title: "UI/UX Design",
    location: "Bangalore, Karnataka",
    requirements: [
      "Implement design changes and enhancements to improve use experience and website aesthetics.",
      "Bachelor's degree in graphic design, marketing, or a related field."
    ],
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f61262986a9cd5c1f99a8d32166f59293bf21576b2bbf6c186b4c78ffd7a328e?placeholderIfAbsent=true&apiKey=54a7534eddb644558f08fe14efe56baf"
  },
  {
    title: "Java Script",
    location: "Bangalore, Karnataka",
    requirements: [
      "A scripting or programming language that allows you to implement complex features on web pages",
      "A powerful programming language that can add interactivity to a website"
    ]
  }
];

export const JobListings: React.FC = () => {
  return (
    <div className="Career-container">
    <div className="Career-header">
      <div className="Career-title-header">
        We're more than just a workplace.{" "}
        <span className="Career-highlightedText">We're a family.</span>
      </div>
      <div className="Career-subtitle">
        <span className="Career-subtitleBold">
          Want to set the Progressive and Stress-free career?
        </span>
        <br />
        You have landed to the right space. Engage with us and we will nurture you !!!
      </div>
    </div>
    <div className ="Searchbarcontainer">
<SearchBar/>
    </div>
    <div className="jobListingsContainer">
    <div className="joblist-container">
      <div className="joblist-header">
        <div className="joblist-sortInfo">Sort by: relevance 50 Job Vacancy</div>
        <h1 className="joblist-sectionTitle">Design jobs</h1>
      </div>
      <div className="jobList">
        {jobListings.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            location={job.location}
            requirements={job.requirements}
            imageSrc={job.imageSrc}
          />
        ))}
      </div>
     
    </div>
    <div className="jobDetailsContainer">
        <JobDetails />
      </div>
    </div>
    </div>
  );
};

export default JobListings;