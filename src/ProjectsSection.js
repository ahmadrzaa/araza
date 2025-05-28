import React from 'react';
import './ProjectsSection.css';

const projects = [
  {
    title: "ERPX — ERP Management Platform",
    description: "An ERP solution built using Django with modules for HR, Finance, CRM, and Leasing. Designed and developed by Ahmad Raza.",
    tags: ["Python", "Django", "PostgreSQL"],
    image: "./icons/erpx2.png",

    live: "https://github.com/ahmadrzaa/ERPX"
  },
   {
  title: "WhatsApp Web Clone",
  description: "Real-time, secure chat app built with MERN stack, WebSocket, and file sharing. Web-based, no mobile number required. Supports text, media, and voice/video calling.",
  tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
  image: "./icons/whatsapp 2.png",
  live: "https://www.linkedin.com/posts/ahmdrza_mern-reactjs-nodejs-activity-7327956161876398082-mZOq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFSSVwBUFEdebdbroREvpGE5d6AjlUvnak"
 },
  {
    title: "AI Attendance System",
    description: "AI-based face detection attendance system integrated into ERPX. Reduces manual HR effort and improves accuracy.",
    tags: ["Computer Vision", "OpenCV", "Django"],
    image: "./icons/face.png",
    live: "https://github.com/ahmadrzaa/ERPX/tree/main/modules/hr"
  },
  {
    title: "eGov Chatbot",
    description: "Custom LLM-powered chatbot built with Node.js and Ollama to automate Bahraini government service queries.",
    tags: ["LLM", "Node.js", "LangChain"],
    image: "./icons/egoverment.jpg",
    live: "https://github.com/ahmadrzaa/egov-chatbot"
  },


];

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h2>My Recent Projects</h2>
      <div className="projects-content">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="live-button"
            >
              LIVE
            </a>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = './icons/default.png'; // fallback image if one fails
              }}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
