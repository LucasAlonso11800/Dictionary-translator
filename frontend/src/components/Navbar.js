import React from 'react'
import Logo from '../assets/Logo.png'

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className='header'>
            <nav className='nav'>
                <img src={Logo} alt='Dictionary logo' className='nav-logo' />
                <div className='nav-text'>
                    <Link to='/' className='nav-link'>OXFORD DICTIONARY</Link>
                    <Link to='/translation' className='nav-link'>TRANSLATOR</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
