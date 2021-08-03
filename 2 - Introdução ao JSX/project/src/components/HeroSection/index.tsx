import React from 'react';
import arrow from '../../assets/arrow-down.svg';
import hero from '../../assets/Hero.png';
import './styles.css';

export default function MainSection() {
    return (
        <div className="container">
            <div className="textarea">
                <h2 className="title">Grow your subscription business</h2>
                <p className="paragraph font-mulish">
                    Outcome-centered products that reduce churn, optimize
                    pricing, and grow your subscription business end-to-end.
                </p>
                <div className="btn-area">
                    <button className="btn-start">Get Started</button>
                    <button className="btn-arrow">
                        <img src={arrow} alt="down arrow" />
                    </button>
                </div>
            </div>
            <img src={hero} alt="a skatist" />
        </div>
    );
}
