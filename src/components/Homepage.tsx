import React from 'react';
import '../style.css';
import Navigationbar from './Navigationbar';

const Homepage: React.FC = () => {
    return (
      <div className="Homepagecontainer" >
      <Navigationbar />
        <div className="maincontainer">
            <div className="maincontent">
                <div className="maintitle">Driving Success</div>
                <div className="mainsubtitle-container">
                    <div className="mainsubtitle">Where Value, Experience & Satisfaction Meet</div>
                    <div className="maintext-container">
                        <div className="mainseparator" />
                        <div className="maintext">
                            <span className="maintext-part">With </span>
                            <span className="mainhighlighted-text">PIXS TECHNOLOGY Solutions, </span>
                            <span className="maintext-part">Elevate Your Business Outcomes And Satisfaction Through Our Superior Innovative Solutions.</span>
                        </div>
                    </div>
                </div>
            </div>
            <img className="image" src="https://via.placeholder.com/544x659" alt="Placeholder" />
        </div>
        </div>
    );
};

export default Homepage;