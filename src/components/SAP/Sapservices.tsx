import React from 'react';
import  NavigationBreadcrumb  from './NavigationBreadcrumb';
import Sap_picture from '../../assets/Sap_picture.png';
import SAP_IMP from '../../assets/SAP_IMP.png';
import SAP_SUP from '../../assets/SAP_SUP.png';
import SAP_INT from '../../assets/SAP_INT.png';
import SAP_CON from '../../assets/SAP_CON.png';
import '../../style.css';
import ProgressBar from './ProgressBar';

const breadcrumbItems = [
  { label: 'Home' },
  { label: 'Services' },
  { label: 'SAP', isActive: true }
];
export const Sapservices: React.FC = () => {
  return (
    <main >
      <div className="Main-Container">
        <NavigationBreadcrumb items={breadcrumbItems} />
        {/*<section >*/}
          <div className="Text-Container" >
          <div className="Text">
          <h1 className="Sap-Text1">
            A process or system which is used <br /> to identify characteristics
          </h1>
          <p className="Sap-Text2" >
            converts raw data into actionable insights.
          </p>
          </div>
          
          <img src={Sap_picture} alt="Sap_picture" />
          </div>

          
          <div className="container">
          <div>
  <div className="card">
    <div className="image-container">
    <img className="image" src={SAP_IMP} alt="SAP Implementation" />
    </div>
    <div className="title-container">
      <div className="title">SAP Implementation</div>
    </div>
    <div className="description-container">
      <div className="description">Streamlining the setup and configuration of SAP systems tailored to your business requirements.</div>
    </div>
  </div>
  
  <div className="card">
    <div className="image-container">
    <img className="image" src={SAP_SUP} alt="SAP Support" />
    </div>
    <div className="title-container">
      <div className="title">SAP Support</div>
    </div>
    <div className="description-container">
      <div className="description">Providing ongoing technical support and maintenance to ensure the smooth operation of SAP applications.</div>
    </div>
  </div></div>
  <div>
  <div className="card">
    <div className="image-container">
      <img className="image" src={SAP_INT} alt="SAP Integration" />
    </div>
    <div className="title-container">
      <div className="title">SAP Integration</div>
    </div>
    <div className="description-container">
      <div className="description">Streamlining the setup and configuration of SAP systems tailored to your business requirements.</div>
    </div>
  </div>

  <div className="card">
    <div className="image-container">
      <img className="image" src={SAP_CON} alt="SAP Consulting" />
    </div>
    <div className="title-container">
      <div className="title">SAP Consulting</div>
    </div>
    <div className="description-container">
      <div className="description">Expert advice on how to leverage SAP software to optimize your business processes and IT infrastructure.</div>
    </div></div>
  </div>
</div>

<div>
  <ProgressBar/>
</div>
    
        <div className="footer-container">
  <div className="footer-text">
    <div className="footer-text-content">
      <span className="text-light">All rights reserved</span>
      <span className="text-bold">@PIXS TECHNOLOGY SOLUTIONS.</span>
    </div>
  </div>
  <div className="social-icons">
    <div className="icon">
      <div className="inner-icon">
        <div className="inner-circle"></div>
      </div>
    </div>
    <div className="icon">
      <div className="inner-icon">
        <div className="inner-circle"></div>
      </div>
    </div>
    <div className="icon">
      <div className="inner-icon">
        <div className="inner-circle"></div>
      </div>
    </div>
  </div>
</div>

    </div>
    </main>  
  );
};
export default Sapservices;