import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/Services'; 
import Sapservices from './components/SubServices/Sapservices'; 
import Homepage from './components/Homepage';
import Testing from './components/SubServices/Testing';
import DataAnalytics from './components/SubServices/DataAnalytics';
import Cloud from './components/SubServices/Cloud';
import AIservices from './components/SubServices/AI';
import ApplicationSupport from './components/SubServices/ApplicationSupport';
import Microservices from './components/SubServices/MicroServices';
import ApplicationDevelopment from './components/SubServices/ApplicationDevelopment';
import ProductDevelopment from './components/SubServices/ProductDevelopment';
import UIUXservices from './components/SubServices/UIUX';
import WebDesign from './components/SubServices/WebDesign';
import ITConsulting from './components/SubServices/ITConsulting';
import Careers from './components/CareersPage/careers';
import CareerListing from './components/CareersPage/careers-listing';
import JobApplyForm from './components/CareersPage/careers-apply';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/sap" element={<Sapservices />} />
        <Route path="/service/testing" element={<Testing />} />
        <Route path="/service/data analytics" element={<DataAnalytics />} />
        <Route path="/service/cloud" element={<Cloud />} />
        <Route path="/service/ai" element={<AIservices />} />
        <Route path="/service/application support" element={<ApplicationSupport />} />
        <Route path="/service/micro services" element={<Microservices />} />
        <Route path="/service/application development" element={<ApplicationDevelopment />} />
        <Route path="/service/product development" element={<ProductDevelopment />} />
        <Route path="/service/uiux" element={<UIUXservices />} />
        <Route path="/service/web designing" element={<WebDesign />} />
        <Route path="/service/IT Consulting" element={<ITConsulting />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/careerlisting" element={<CareerListing />} />
      </Routes>
    </Router>
  );
}

export default App;