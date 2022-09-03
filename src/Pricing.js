import React from 'react';
import NavbarMenu from './NavbarMenu';
import './Pricing.css';

function Pricing(props) {
    return (
        <React.Fragment>
            <NavbarMenu />
            <div className='abc'>
                <div className='Main'>
                    <div id='Services'>
                        <div className='services'>
                            <h1>OUR PRICING</h1>
                            <div className='b-border'></div>
                        </div>
                        <div className='b-text'>
                            <p>Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>
                        </div>
                    </div>
                    <div className='maindiv'>
                        <div className='middlediv'>
                            <h6>ECONOMY</h6>
                            <div className='price'>$9.90</div>
                            <p>BILLING PER MONTH</p>
                            <div className='b-hr'></div>
                            <div className='servicec'>
                                <ul>
                                    <li>Bandwidth: <b>1GB</b></li>
                                    <li>Onlinespace : <b>50MB</b></li>
                                    <li>Support: <b>No</b></li>
                                    <li>Domain: <b>1</b></li>
                                    <li>Hidden Fees:<b>No</b></li>
                                </ul>
                            </div>
                            <div className='btn1'>
                                <button>Join Now</button>
                            </div>
                        </div>
                        <div className='middlediv'>
                            <h6>DELUXE</h6>
                            <div className='price'>$19.90</div>
                            <p>BILLING PER MONTH</p>
                            <div className='b-hr'></div>
                            <div className='servicec'>
                                <ul>
                                    <li>Bandwidth: <b>10GB</b></li>
                                    <li>Onlinespace : <b>500MB</b></li>
                                    <li>Support: <b>No</b></li>
                                    <li>Domain: <b>10</b></li>
                                    <li>Hidden Fees: <b>No</b></li>
                                </ul>
                            </div>
                            <div className='btn1'>
                                <button>Join Now</button>
                            </div>
                        </div>
                        <div className='middlediv'>
                            <h6>ULTIMATE</h6>
                            <div className='price'>$29.90</div>
                            <p>BILLING PER MONTH</p>
                            <div className='b-hr'></div>
                            <div className='servicec'>
                                <ul>
                                    <li>Bandwidth: <b>100GB</b></li>
                                    <li>Onlinespace : <b>2GB</b></li>
                                    <li>Support: <b>Yes</b></li>
                                    <li>Domain: <b>Unlimited</b></li>
                                    <li>Hidden Fees: <b>No</b></li>
                                </ul>
                            </div>
                            <div className='btn1'>
                                <button>Join Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Pricing;