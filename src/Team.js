import React from 'react';
import img_1 from './img_1.jpg';
import img_2 from './img_2.jpg';
import img_3 from './img_3.jpg';
import img_4 from './img_4.jpg';
import NavbarMenu from './NavbarMenu';
import './Team.css'

function Team(props) {
    return (
        <React.Fragment>
            <NavbarMenu />
            <div className='abc'>
            <div className='Main'>
                <div id='Services'>
                    <div className='services'>
                        <h1>BEHIND THE PEOPLE</h1>
                        <div className='b-border'></div>
                    </div>
                    <div className='b-text'>
                        <p>It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>

                <div className='Mainone'>
                    <div className='person'>
                        <img src={img_1} alt="Frank Johnson-CEO" />
                        <h5>Frank Johnson</h5>
                        <p>CEO</p>
                    </div>
                    <div className='person'>
                        <img src={img_2} alt="Elaine Stclair-DESIGNER" />
                        <h5>Elaine Stclair</h5>
                        <p>DESIGNER</p>
                    </div>
                    <div className='person'>
                        <img src={img_3} alt="Wanda Arthur-DEVELOPER" />
                        <h5>Wanda Arthur</h5>
                        <p>DEVELOPER</p>
                    </div>
                    <div className='person'>
                        <img src={img_4} alt="Joshua Stemple-MANAGER" />
                        <h5>Joshua Stemple</h5>
                        <p>MANAGER</p>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    );
}

export default Team;