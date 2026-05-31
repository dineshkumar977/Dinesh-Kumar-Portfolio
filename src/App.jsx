import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import ChatBot from "./components/ChatBot";

function App() {
  useEffect(() => {
     window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
     AOS.init({
    duration:1000,
  });

  const glow = document.querySelector(".cursor-glow");

  window.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

  });

}, []);
  return (
    <>
    <div className="cursor-glow"></div>
    
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <ChatBot />
    </>
  );
}

export default App;