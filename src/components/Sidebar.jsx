import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isVisible }) => {
    return (
        <div className={`sidebar ${isVisible ? 'open' : ''}`}>
            <div className="logo">
                <i className='bx bx-horizontal-right'></i>
                <span className="logo-name"></span>
            </div>
            <ul className="menu">
                <li className="menu-item">
                    <a href="#presentation" className="menu-link">
                        <i className="bx bx-home"></i>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#experience" className="menu-link">
                        <i className="bx bx-user"></i>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#projects" className="menu-link">
                        <i className="bx bx-briefcase"></i>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#contact" className="menu-link">
                        <i className="bx bx-envelope"></i>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#contact" className="menu-link">
                        <i className='bx bxs-file-pdf'></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
