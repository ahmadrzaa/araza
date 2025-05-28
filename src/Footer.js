import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaFacebook, FaWhatsapp, FaCoffee, FaStackOverflow, FaSlack } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="social-media-icons">
                <a href="https://www.instagram.com/ahmd.rs_" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon instagram" />
                </a>

                <a href="https://wa.me/+918102326415" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="icon whatsapp" />
                </a>

                <a href="https://github.com/ahmadrzaa" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon github" />
                </a>

                <a href="https://www.facebook.com/ahmdrzas" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="icon facebook" />
                </a>

                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon linkedin" />
                </a>
               
                <a href="https://www.buymeacoffee.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaCoffee className="icon coffee" />
                </a>
                <a href="https://stackoverflow.com/users/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaStackOverflow className="icon stackoverflow" />
                </a>
                <a href="https://slack.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaSlack className="icon slack" />
                </a>
            </div>
            <p>Contact me at: <a href="mailto:ahmadrza.1110@gmail.com" className="email">ahmadrza.1110@gmail.com</a></p>
            <p>Copyright © 2026 Ahmad Raza</p>
        </div>
    );
};

export default Footer;
