import React from 'react';
import Featuresimage from './Featuresimage.jpg';
import './Features.css'
import NavbarMenu from './NavbarMenu';


function Features(props) {
    return (
        <React.Fragment>
            <NavbarMenu />
            <div className='abc'>
                <div className='services'>
                    <h1>FEATURES</h1>
                    <div className='b-border'></div>
                </div>
                <div className='b-text'>
                    <p>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
                </div>
                <div className='maindiv'>
                    <div className='leftdiv'>
                        <div className='titaldiv'>
                            <h1>A digital web design studio creating modern & engaging online experiences</h1>
                        </div>
                        <div className='pdiv'>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        <div className='listdiv'>
                            <ul className='feature-item-list'>
                                <li>We put a lot of effort in design.
                                </li>
                                <li>The most important ingredient of successful website.
                                </li>
                                <li>Sed ut perspiciatis unde omnis iste natus error sit.
                                </li>
                                <li>Submit Your Orgnization.
                                </li>
                            </ul>
                        </div>
                        <div className='btndiv'>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className='rightdiv'>
                        <img src={Featuresimage} alt="logo" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Features;