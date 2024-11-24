import React from 'react';
import {About, Footer, Header, Skills, Work, Testimonials, Education, Projects } from './container';
import { Navbar } from './components';
import './App.scss';
import StarsCanvas from './components/StarsCanvas/StarCanvas';

const App = () => {
    return (
        <div className='app'>
            <StarsCanvas/>
            <Navbar/>
            <Header/>
            <About/>
            <Skills/>
            <Work/>
            <Projects/>
            <Education/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}

export default App;
