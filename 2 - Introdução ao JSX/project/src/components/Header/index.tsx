import React from 'react';
import logo from '../../assets/logo.svg';
import './styles.css';

export default function Header() {
    return (
        <header className='header'>
            <img src={logo} alt='' />
            <nav>
                <ul className='navbar'>
                    <li><a href='https://google.com' className='nav-item nav-selected'>Home</a></li>
                    <li><a href='https://google.com' className='nav-item'>Features</a></li>
                    <li><a href='https://google.com' className='nav-item'>Pricing</a></li>
                    <li><a href='https://google.com' className='nav-item'>Blog</a></li>
                </ul>
            </nav>
            <button className='btn-header'>Get Started</button>
        </header>
    );
}
