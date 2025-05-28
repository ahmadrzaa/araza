import React from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
    return (
        <div className="skills-section">
            <h2>My Skills</h2>
            <div className="skills-content">
                <div className="skill">
                    <h3>Java Full Stack</h3>
                    <p>Year of experience</p>
                    <div className="icons">
                        <img src="./icons/javascript.png" alt="JavaScript" />
                        <img src="./icons/java (1).png" alt="Java" />
                        <img src="./icons/react.png" alt="React" />
                        <img src="./icons/nodejs.png" alt="Nodejs" />
                    </div>
                </div>
                <div className="skill">
                    <h3>Data Analytics & AI</h3>
                    <p>6 Months experience</p>
                    <div className="icons">
                        <img src="./icons/tens.png" alt="TensorFlow" />
                        <img src="./icons/python.png" alt="Pandas" />
                        <img src="./icons/sql.png" alt="SQL" />
                      
                    </div>
                </div>
                <div className="skill">
                    <h3>Software Development</h3>
                    <p>Year of experience</p>
                    <div className="icons">
                        <img src="./icons/javascript.png" alt="JavaScript" />
                        <img src="./icons/python.png" alt="Python" />
                        <img src="./icons/java (1).png" alt="Java" />
                    </div>
                </div>
                <div className="skill">
                    <h3>Project Coordination</h3>
                    <p>6 Months experience</p>
                    <div className="icons">
                        <img src="./icons/scrum.png" alt="Scrum" />
                        <img src="./icons/jira.png" alt="Jira" />
                        <img src="./icons/management.png" alt="Trello" />
                    </div>
                </div>
            </div>
            <p className="skills-description">
                I have a diverse skill set in software development, data analytics, artificial intelligence, and project coordination.
                <p>I have developed numerous projects,including a custom chatbot using ChatGPT, and have worked with various tools and technologies 
                to create impactful solutions.</p>
            </p>
        </div>
    );
};

export default SkillsSection;
