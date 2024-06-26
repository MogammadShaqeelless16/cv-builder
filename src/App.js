import React, { useState } from 'react';
import './index.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Languages from './components/Languages/Languages';
import Experience from './components/Experience/Experience';
import Certificates from './components/Certificates/Certificates';
import Profile from './components/Profile/Profile';
import Education from './components/Education/Education';
import Interests from './components/Interests/Interests';
import Contact from './components/Contact/Contact';
import Social from './components/Social/Social';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
    const [showAddExperienceButton, setShowAddExperienceButton] = useState(true);

    return (
        <div className="App">
            <Header setShowAddExperienceButton={setShowAddExperienceButton} />
            <main className="l-main bd-container">
                <div className="resume" id="area-cv">
                    <div className="resume_left">
                        <Home />
                        <Contact />
                        <Profile />
                        <Social />
                        <Skills />
                        <Languages />
                    </div>
                    <div className="resume_right">
                        <Experience showAddButton={showAddExperienceButton} />
                        <Certificates />
                        <Education />
                        <Interests />
                        <Portfolio />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
