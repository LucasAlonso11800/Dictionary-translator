import React from 'react'
import Logo from '../assets/Logo.png'

function Navbar() {
    return (
        <header className='header'>
            <nav className='nav'>
                <img src={Logo} alt='Dictionary logo' className='nav-logo'/>
                <p className='nav-text'>OXFORD DICTIONARY</p>
            </nav>
        </header>
    )
}

export default Navbar
