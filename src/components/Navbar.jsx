import React from 'react';
import './Navbar.css';
import glogo from '../assets/g-logo.svg';

const Navbar = ({ toggleSidebar, toggleTheme, isDarkMode }) => {
    return (
        <nav className="navbar">
            <div className='navbar-container'>
                <div className="navbar-logo">
                    <a href="#"><img src={glogo} alt="g-logo" className="logo-img" /></a>
                    
                </div>
                <ul className="navbar-links">
                    <li><a href="#experience">Experiencia</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#aboutme">Sobre mí</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
                <div className="navbar-actions">
                    <button className="theme-button" onClick={toggleTheme}>
                        {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                    </button>
                    <button className="menu-button" onClick={toggleSidebar}>
                        <i className="bx bx-menu"></i>
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
