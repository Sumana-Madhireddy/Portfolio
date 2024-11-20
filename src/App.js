import React from 'react';
import {About, Footer, Header, Skills, Experience, Testimonials, Education, Projects } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
    return (
        <div className='app'>
            <Navbar/>
            <Header/>
            <About/>
            <Experience/>
            <Projects/>
            <Education/>
            <Skills/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}

export default App;
