import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <div className="about-section">
            <div className="about-content">
                <h1>Hi there, I'm Ahmad Raza.</h1>
                <p>
                    Welcome! I am a software development engineer with a diverse background in software engineering and project coordination.
                    I have had the privilege of working with leading companies and have a rich experience in web development, data analytics, 
                    and creating innovative solutions.
                </p>
                <p>
                    <strong>Professional Background:</strong><br />
                    - Current: Software Development Engineer at <a href="https://intermid.net/" target="_blank" rel="noopener noreferrer">Intermid.net Bahrain</a>.<br />
                    - Previous: Software Engineer at <a href="https://www.ibm.com/us-en" target="_blank" rel="noopener noreferrer">IBM</a> (2019-2020).<br />
                    - Previous: Project Coordinator at Webblitz Software, Bangalore.
                </p>
                <p>
                    <strong>Education:</strong><br />
                    I hold a Master's degree in Computer Science (MCA) from <a href="https://www.reva.edu.in/" target="_blank" rel="noopener noreferrer">Reva University, Bangalore</a>.
                </p>
                <p>
                    <strong>Projects and Achievements:</strong><br />
                    I have developed numerous projects in web development and data analytics. One of my notable projects is a <a href="https://ahmadrzaa.github.io/AR-chatgpt/" target="_blank" rel="noopener noreferrer">custom chatbot </a> 
                    using ChatGPT, which allows real-time user interactions similar to a messaging application.
                </p>
                <p>
                    My goal is to continue leveraging my skills to create impactful and innovative solutions. Explore this page to learn more about 
                    my journey and how I can help you!
                </p>
                <button className="about-button">My career journey</button>
            </div>
        </div>
    );
};

export default AboutSection;
