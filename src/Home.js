import React from 'react';
import './Home.css';
import Services from './Services';
import Features from './Features';
import Pricing from './Pricing';
import Team from './Team';
import BgColorPattern from './BgColorPattern'
import NavbarMenu from './NavbarMenu';

function Home(props) {
    return (
        <React.Fragment >
            
            <BgColorPattern/>
            <NavbarMenu/>
            <Services />
            <Features />
            <Pricing />
            <Team />
        </React.Fragment>
    );
}

export default Home;