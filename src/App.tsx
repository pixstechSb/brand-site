import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import CareersSection from './components/CareersSection';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Homepage/>
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careerssection" element={<CareersSection />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;