import '../CareersPage/careers-listing.css'
import Dropdown from './widgets/dropdown';
import { jobListType } from '../CareersPage/types/careers';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {  listJobs } from './services/careers-services';
import Navigationbar from '../Navigationbar';
import ClipLoader from "react-spinners/ClipLoader";
import { EarlyBirdjobList, ExperiencedjobList, InternjobList } from './data/careers';
import {search, cancel,pay,shift,jobType} from '../../utils/constants'

const CareerListing = () => {
  const navigate = useNavigate()
  const { state } = useLocation();
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isJobVisible, setJobVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState<jobListType | null>(null);
  const [jobParams, setJobParams] = useState({ experience:  state.experience, location: '' })

  const fetchJobList = async () => {
    try {
      const response = await listJobs("/career", "/jobs", jobParams.location, jobParams.experience != '' ? state.experience : jobParams.experience);
      // if (!response.ok) {
      //   throw new Error(`Error: ${response.status}`);
      // }
      const result = await response.json();
      setLoading(false)
      setJobList(result.json());
    } catch (err) {
      let jobs:any = [];
      setLoading(false)
       switch (jobParams.experience) {
            case 'EarlyBird':
              jobs = EarlyBirdjobList;
              break;
            case 'Expertise':
              jobs = ExperiencedjobList;
              break;
            case 'Fresher':
              jobs = InternjobList;
              break;
            default: jobs = EarlyBirdjobList; break;}
      console.log("loaded jobs",jobs)
      setJobList(jobs);
      //setError(true)
      console.log(setError)
    } finally {
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchJobList();
  }, []);

  const handleTileClick = (job: jobListType) => {
    console.log(isJobVisible)
    setJobVisible(true);
    setSelectedJob(job);
  };


  const handleLocationSelect = (option: string) => {
    console.log('Selected location:', option);
    setJobParams((i) => ({ ...i, location: option }))
  };

  const handleExperienceSelect = (option: string) => {
    console.log('Selected experience:', option);
    setJobParams((i) => ({ ...i, experience: option }))
  };

  const renderJobCard = (job: jobListType, index: number) => (
    <div key={index} className="list-card" onClick={() => handleTileClick(job)}>
      <p className="listCard-Jobtitle">{job.Role}</p>
      <p>{job.companyName ?? "Pixstech"}</p>
      <p className="listCard-location">{job.OfficeLocation}</p>
      <p>{job.Requirements}</p>
    </div>
  );

  const renderHeader = () => (
    <div className="list-main">
      <div className="list-container">
        <p className="list-header">Careers</p>
        <h1 className="list-sub-header">We're more than just a workplace. We're a family.</h1>
        <p className="list-text-content">
          Want to set a progressive and stress-free career? You have landed in the right place. Engage with us, and we will nurture you!
        </p>
        <div className="job-search-widget">
          <div className="search-bar">
            <Dropdown options={['Chennai', 'Bangalore', 'Pune']} onSelect={handleLocationSelect} defaultOption="Location" />
            <Dropdown options={['EarlyBird', 'Expertise', 'Fresher']} onSelect={handleExperienceSelect} defaultOption="Experience" />
            <div className="search-container">
              <img src={search} alt="Search" height="18" width="18" />
              <input placeholder="Enter skills" className="search-input" />
              <img src={cancel} alt="Clear" height="18" width="18" />
            </div>
            <button className="find-jobs" onClick={() => fetchJobList()}>Find Jobs</button>
          </div>
        </div>
      </div>
      <div className="job-list-main-container">
        <div className="job-list-sub-container">
          <p>Upload your Resume and find your next job.</p>
          <div className="sort-container">
            <p>Sort by: Relevance</p>
            <p>{jobList.length} Job Vacancies</p>
          </div>
          <h3>Design Jobs</h3>
          <div className="list-scroll">
            {

              jobList.length > 0 ? jobList.map((job, index) => renderJobCard(job, index)) : loadingWidget()}
          </div>
        </div>
        <div className="detail-card-container">
          {renderJobDetailsCard(selectedJob)}
        </div>
      </div>
    </div>
  );

  const loadingWidget = () => {
    return (
      <>
      <div className='loaderContainer'>
        <ClipLoader
          color={"#9ba7f6"}
          loading={loading}
          size={75}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        {isError == true ? <div className='loaderContainer'>
      <div className='errorContainer'>
      <h3 className='errorHeader'>
        Sorry couldn't load your request
      </h3>
      <h5 className='errorContent'>Please try again after sometime.</h5>
    </div>
    </div> : ''}
      </div>
      </>
      
    )
  }

  const renderJobDetailsCard = (job: jobListType | null) => {
    if (!job) return null;

    return (
      <div className="details-card">
        <h1>{job.Role}</h1>
        <h2>{job.companyName}</h2>
        <button className="find-jobs" onClick={() => {
          navigate('/apply', { state: { jobId: job.id, jobName: job.Role } })
        }
        }>Apply Now</button>
        <div className="icon-cards-container">
          <h2>Job Details</h2>
          <p>Here's how the job profile aligns with your profile.</p>
          {renderDescriptionCard(pay, 'Pay', job.Pay)}
          {renderDescriptionCard(jobType, 'Job Type', job.JobType)}
          {renderDescriptionCard(shift, 'Shift', job.ShiftAndSchedule)}
        </div>
      </div>
    );
  };

  const renderDescriptionCard = (imgSrc: string, title: string, value: string) => (
    <div className="description-card">
      <div className="icon-title">
        <img src={imgSrc} alt={title} className="icon-img" height={20} width={20} />
        <p className="title-text">{title}</p>
      </div>
      <div className="icon-sub-container">
        <p className="icon-value">{value}</p>
      </div>
    </div>
  );
  return (<>
    <Navigationbar />
    <div className='listing-main-container'>{renderHeader()}</div>
  </>);
};

export default CareerListing;
