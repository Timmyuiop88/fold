
import './App.css';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bar from './components/nav';
import Hero from './components/hero';
import Project from './components/project';
import Experience from './components/experience';
import Skills from './components/skills';
import Contactme from './components/contact';
import Footer from './components/footer';
import './components/fonts/Neue-montreal-free-demo_pangram-pangram_030418/NeueMontreal-Regular.otf'
import './components/fonts/non-natural-grotesk-font-1669943045-0/non-natural-grotesk-trialversion-regular.otf'

function App() {
  
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      
      <Bar />
     <Hero />
    <Project />
    <Experience />
    <Skills/>
    <Contactme />
    <Footer />
    </div>
  );
}

export default App;
