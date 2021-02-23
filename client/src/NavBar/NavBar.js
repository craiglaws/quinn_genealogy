import React from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../images/logo-no-white.png';

function NavBar(){
    return(
        <nav className='navbar123'>
                <img className='navbar-logo' src={companyLogo} alt='Quinn Tree Logo'/>

                <div className='navbar-links'>
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/services">Services</Link>
                    <Link className='nav-link' to="/contact">Contact</Link>
                </div>
         </nav>
        
    )
}

export default NavBar;