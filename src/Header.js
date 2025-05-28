import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <h1>AHMAD RAZA</h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#home" className="active">Home</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#links">Links</a></li>
                       <li><a href="#links"> Shop</a></li>
                        <li><a href="#Project">Project</a></li>
                       
                        <li><a href="#contact">Contact Me</a></li>
                    </ul>
                </nav>
                <div className="toggle" onClick={toggleMenu}>
                    <div className="toggle-icon">&#9776;</div>
                </div>
            </div>
            {isOpen && (
                <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                    <div className="close" onClick={toggleMenu}>X</div>
                    <ul>
                        <li><a href="#home" className="active">Home</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#links">Links</a></li>
                        <li><a href="#links"> Shop</a></li>
                        <li><a href="#Project">Project</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                       
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
