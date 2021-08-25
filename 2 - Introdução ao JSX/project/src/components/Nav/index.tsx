import React from 'react';
import logo from '../../assets/logo.svg';
import './styles.css';

export default function Header() {
    return (
        <div className='header'>
            <img src={logo} alt='' />
            <nav>
                <ul className='navbar'>
                    <li><a href='#' className='nav-item nav-selected'>Home</a></li>
                    <li><a href='#' className='nav-item'>Features</a></li>
                    <li><a href='#' className='nav-item'>Pricing</a></li>
                    <li><a href='#' className='nav-item'>Blog</a></li>
                </ul>
            </nav>
            <button className='btn-header'>Get Started</button>
        </div>
    );
}
