import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx';
import Frases from './pages/Frases.jsx';
import Talks from './pages/Talks.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';

export default function App(){
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Frases/>
      <Talks/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}