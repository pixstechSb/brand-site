import { useEffect, useRef, useState } from 'react';
import './careers-apply.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navigationbar from '../Navigationbar';
import { jobApplyType } from './types/careers';
import { applyJobAPI } from './services/careers-services';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import {instagram, facebook,telegram, whatsapp} from '../../utils/constants'

function JobApplyForm() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [emailId, setEmailId] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [city, setCity] = useState('');
    const [graduation, setGraduation] = useState('');
    const [experience, setExperience] = useState('');
    const [careerGap, setCareerGap] = useState('');
    const [noticePeriod, setNoticePeriod] = useState('');
    const [ctc, setCtc] = useState('');
    const [offeredCtc, setOfferedCtc] = useState('');
    const [offerInHand, setOfferInHand] = useState('');
    const [expectedCtc, setExpectedCtc] = useState('');
    const [resume, setResume] = useState<any>(null);
    const [jobDetails, setJobDetails] = useState<jobApplyType>()
    const jobInfo = { jobId: state.jobId, jobName: state.jobName }
    const uploadResumeRef = useRef<HTMLInputElement | null>(null);
    const formData = new FormData();

    const handleSubmit = async (event: any) => {
        toast.info('Form submitted', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        try {
            event.preventDefault();
            console.log("Submit handled")
            setJobDetails((prop) => ({ ...prop, jobId: jobInfo.jobId, firstName: firstName, lastName: lastName, dateOfBirth: dateOfBirth, emailId: emailId, contactNumber: contactNumber, city: city, graduation: graduation, experience: experience, careerGap: careerGap, noticePeriod: noticePeriod, ctc: ctc, offeredCtc: offeredCtc, offerInHand: offerInHand, expectedCtc: expectedCtc, resume: resume }))
            formData.append("jobId", jobInfo.jobId)
            formData.append("FirstName", firstName)
            formData.append("LastName", lastName)
            formData.append("FirstName", dateOfBirth)
            formData.append("EmailId", emailId)
            formData.append("PhoneNumber", contactNumber)
            formData.append("City", city)
            formData.append("Graduation", graduation)
            formData.append("Experience", experience)
            formData.append("CareerGap", careerGap)
            formData.append("NoticePeriod", noticePeriod)
            formData.append("Ctc", ctc)
            formData.append("OfferedCtc", offeredCtc)
            formData.append("OfferInHand", offerInHand)
            formData.append("OfferedCtc", expectedCtc)
            formData.append("Resume", resume)

            const response = await applyJobAPI('/career', '/apply', formData);
            if (response.ok) {
                toast.success('Application submitted successful', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            }
            console.log('Form submitted!', jobDetails);
        } catch (error) {
            toast.error('Couldn\'t submit your application', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }

    };

    const handleFileChange = (event: any) => {
        setResume(event.target.files[0]);
        console.log(resume)
    };

    const resumeButtonClick = () => {
        if (uploadResumeRef.current) {
            uploadResumeRef.current.click();
        }
    };

    useEffect(() => { }, [resume])

    const headerText = () => {
        return (
            <div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition={Bounce}
                />
                <div className='mainContainer'>
                    <h5>{jobInfo.jobName ?? "Job Title"}</h5>
                    <div className='header-subtite'>
                        <p className='nomargin'>We add value better</p>
                        <p className='nomargin'>experience & satisfaction</p>
                    </div>
                    <div className='socialmedia-icons'>
                        <img width={40} height={40} src={facebook} />
                        <img width={40} height={40} src={instagram} />
                        <img width={40} height={40} src={whatsapp} />
                        <img width={40} height={40} src={telegram} />
                    </div>
                    <div>
                        {resume ? <button className="fileSelected" onClick={() => resumeButtonClick()}>{resume.name}</button> : <button className="browse-button" onClick={() => resumeButtonClick()}>
                            Browse
                        </button>}
                        <input
                            type="file"
                            ref={uploadResumeRef}
                            onChange={handleFileChange}
                            style={{ display: 'none' }} // Hide the file input
                        />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='formContainer'>
                        <div>
                            <div className="form-field">
                                <label className='inputlabel' htmlFor="firstName">First Name <span className='required'>*</span></label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="dateOfBirth" className='floating-label'>Date of Birth <span>*</span></label>
                                <input
                                    type="date"
                                    id=" dateOfBirth"
                                    value={dateOfBirth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="contactNumber">Contact Number <span>*</span></label>
                                <input
                                    type="tel"
                                    id="contactNumber"
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="graduation">Graduation </label>
                                <input
                                    type="text"
                                    id="graduation"
                                    value={graduation}
                                    onChange={(e) => setGraduation(e.target.value)}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="careergap">Career gap </label>
                                <input
                                    type="number"
                                    id="careergap"
                                    value={careerGap}
                                    onChange={(e) => setCareerGap(e.target.value)}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="ctc">CTC <span>*</span></label>
                                <input
                                    type="number"
                                    id="ctc"
                                    value={ctc}
                                    onChange={(e) => setCtc(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="offeredctc">Offered CTC <span>*</span></label>
                                <input
                                    type="number"
                                    id="offeredctc"
                                    value={offeredCtc}
                                    onChange={(e) => setOfferedCtc(e.target.value)}

                                />
                            </div>
                            <button className='cancelBtn' onClick={() => navigate("/careerlisting")}>Cancel</button>
                        </div>
                        <div>
                            <div className='form-field'>
                                <label htmlFor="lastName">
                                    Last Name <span aria-hidden="true">*</span>
                                </label>
                                <input type="text" id="lastName" value={lastName}
                                    onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className="form-field">
                                <label htmlFor="emailId">Email ID <span>*</span></label>
                                <input
                                    type="email"
                                    id="emailId"
                                    value={emailId}
                                    onChange={(e) => setEmailId(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="city">City</label>
                                <input
                                    type="tel"
                                    id="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="experience">Experience <span>*</span></label>
                                <input
                                    type="number"
                                    id="experience"
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="noticeperiod">Notice period <span>*</span></label>
                                <input
                                    type="number"
                                    id="noticeperiod"
                                    value={noticePeriod}
                                    onChange={(e) => setNoticePeriod(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="offerInHand">Offer in hand <span>*</span></label>
                                <input
                                    type="number"
                                    id="offerInHand"
                                    value={offerInHand}
                                    onChange={(e) => setOfferInHand(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="expectedCtc">Expected CTC <span>*</span></label>
                                <input
                                    type="number"
                                    id="expectedCtc"
                                    value={expectedCtc}
                                    onChange={(e) => setExpectedCtc(e.target.value)}
                                    required
                                />
                            </div>
                            <button className='submitBtn'  >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    return (<>
        <Navigationbar />
        {headerText()}
    </>

    );
}

export default JobApplyForm;