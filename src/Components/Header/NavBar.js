import React from 'react'
import Logo from '../../Resources/images/logos/logo.png'
import './Header.css'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img className="logo" src={Logo} alt="logo" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto d-flex align-items-center">
                    <li className="nav-item active">Home</li>
                    <li className="nav-item">Our Portfolio</li>
                    <li className="nav-item dropdown">Our Team</li>
                    <li className="nav-item">Contact Us</li>
                    <button>Login</button>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;