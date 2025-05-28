import React from 'react';
import Header from './Header';
import SliderComponent from './SliderComponent';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';

import ProjectsSection from './ProjectsSection';
import NextSection from './NextSection';

import Footer from './Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
    return (
        <div>
            <Header />
            <div id="home">
                <SliderComponent />
             
            </div>
            <div id="about">
                <AboutSection />
            </div>
            <div id="links">
                <SkillsSection />
            </div>
        

          
            <div id="projects">
                <ProjectsSection />
            </div>
            <div id="contact">
                <NextSection />
            </div>
            <Footer />
        </div>
    );
};

export default App;
