import React from 'react';
import NavbarMenu from './NavbarMenu';
import './Services.css';
import Services_6_1 from './Services_6_1.jpg';
import Services_6_2 from './Services_6_2.png';
import Services_6_3 from './Services_6_3.jpg'
import Services_6_4 from './Services_6_4.jpg'
import Services_6_5 from './Services_6_5.jpg'
import Services_6_6 from './Services_6_6.jpg'

function Services(props) {
    return (
        <React.Fragment>
            <NavbarMenu />
            <div className='abc'>
                <div id='Services'>
                    <div className='services'>
                        <h1>OUR SERVICES</h1>
                        <div className='b-border'></div>
                    </div>
                    <div className='b-text'>
                        <p>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
                    </div>
                    <div className='main'>
                        <div className='img123'>
                            <div>
                                <img className='images' src={Services_6_1} alt="icon" />
                            </div>
                            <div className='head'>
                                <h3>
                                    Unlimited Colors
                                </h3>
                            </div>
                            <div className='text'>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.
                                </p>
                            </div>

                        </div>

                        <div className='img123'>
                            <div>
                                <img className='images' src={Services_6_2} alt="icon" />
                            </div>
                            <div className='head'>
                                <h3>
                                    Unlimited Colors
                                </h3>
                            </div>
                            <div className='text'>
                                <p>
                                    Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.
                                </p>

                            </div>
                        </div>

                        <div className='img123'>
                            <div>
                                <img className='images' src={Services_6_3} alt="icon" />
                            </div>
                            <div className='head'>
                                <h3>
                                    Strategy Solutions
                                </h3>
                            </div>
                            <div className='text'>
                                <p>
                                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.
                                </p>
                            </div>
                        </div>
                        <div className='img123'>
                            <div>
                                <img className='images' src={Services_6_4} alt="icon" />
                            </div>
                            <div className='head'>
                                <h3>
                                    Awesome Support
                                </h3>
                            </div>
                            <div className='text'>
                                <p>
                                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.
                                </p>
                            </div>
                        </div>
                        <div className='img123'>
                            <div>
                                <img className='images' src={Services_6_5} alt="icon" />
                            </div>
                            <div className='head'>
                                <h3>
                                    Truly Multipurpose
                                </h3>
                            </div>
                            <div className='text'>
                                <p>
                                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                                </p>
                            </div>
                        </div>
                        <div className='img123'>
                            <div>
                                <img className='images' src={Services_6_6} alt="icon" />
                            </div>
                            <div className='head'>
                                <h3>
                                    Easy to customize
                                </h3>
                            </div>
                            <div className='text'>
                                <p>
                                    Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Services;