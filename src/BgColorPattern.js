import React from 'react';
import './Home.css';
import bg_pattern from './bg-pattern.png'

function BgColorPattern(props) {
    return (
        <React.Fragment >
            <div className='bg-back-color'>
                <div className='text1'>
                    <h1>We help startups launch their products</h1>
                </div>
                <div className='text2'>
                    <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
                </div>
            </div>
            <section className='bg-home'>
            </section>
            <div className='pattern'>
                <img src={bg_pattern} alt="pattern" />
            </div>
        </React.Fragment>
    );
}

export default BgColorPattern;