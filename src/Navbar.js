import React from 'react';
import './Navbar.css'
import './Home.css'
import Home from './Home';
import Services from './Services';
import Features from './Features';
import Pricing from './Pricing';
import Team from './Team';
import ContactUs from './ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function Navbarr(props) {
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/Features" element={<Features />} />
                    <Route path="/Pricing" element={<Pricing />} />
                    <Route path="/Team" element={<Team />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                </Routes>
            </Router>
        </React.Fragment>
    );
}

export default Navbarr;