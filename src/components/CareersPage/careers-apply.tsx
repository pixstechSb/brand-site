import { useState } from 'react';
import './careers-apply.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navigationbar from '../Navigationbar';


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
    const [resume, setResume] = useState(null);

    console.log(state)

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Handle form submission here
        console.log('Form submitted!');
    };

    const handleFileChange = (event: any) => {
        console.log(resume)
        setResume(event.target.files[0]);
    };

    const headerText = () => {
        return (
            <div>
                <div className='mainContainer'>
                    <h5>{state.jobName}</h5>
                    <div className='header-subtite'>
                        <p className='nomargin'>We add value better</p>
                        <p className='nomargin'>experience & satisfaction</p>
                    </div>
                    <div className='socialmedia-icons'>
                        <img width={40} height={40} src="src/assets/facebook.png" />
                        <img width={40} height={40} src='src/assets/instagram.png' />
                        <img width={40} height={40} src='src/assets/whatsapp.png' />
                        <img width={40} height={40} src='src/assets/telegram.png' />
                    </div>
                    <div>
                        <button className="browse-button" onClick={(e)=>handleFileChange(e)}>
                            Browse
                        </button>
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
                            <button className='submitBtn' >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    return (<>
    <Navigationbar/>
    {  headerText()}
    </>
      
    );
}

export default JobApplyForm;