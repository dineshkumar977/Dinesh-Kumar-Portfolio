import "./Hero.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-left">

          {/* <span className="tag">AVAILABLE FOR WORK</span> */}

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Building Modern <br />
            Digital Experiences
          </motion.h1>

          <h2>Dinesh Kumar</h2>
         <p className="tech-line">
  React • Next.js • TypeScript • Node.js • PostgreSQL • AWS
</p>

          <motion.p
            className="desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Senior Full Stack Engineer with 6+ years of
            experience building scalable SaaS platforms,
            analytics dashboards, enterprise applications
            and cloud-based solutions.
          </motion.p>

          <div className="hero-stats">
            <div id="stats1">
              <h3>6+</h3>
              <p>Years Experience</p>
            </div>

            <div id="stats2">
              <h3>20+</h3>
              <p>Projects Delivered</p>
            </div>

            <div id="stats1">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>

          <motion.div
            className="btns"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
           <a href="#projects">
  <button className="primary">
    View Projects
  </button>
</a>

            <a
  href="/resume.pdf"
  download
>
  <button className="secondary">
    Download Resume
  </button>
</a>
          </motion.div>

        </div>
        <div className="social-links">

  <a href="#">
    <FaGithub />
  </a>

  <a href="https://www.linkedin.com/in/dinesh-kumar-react/"
  target="_blank"
  rel="noopener noreferrer">
  
    <FaLinkedin />
  </a>

  <a href="#">
    <FaEnvelope />
  </a>

</div>

        {/* Right Side */}
        <div className="hero-right">

          <div className="code-card">

            <div className="card-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>{`const developer = {
  name: "Dinesh",
  role: "Senior Full Stack Engineer",

  experience: "6+ Years",

  projects: "20+",

  location: "Mohali, India",
  
  skills: [
    "React",           "Node.js",
    "Typescript",      "REST APIs",
    "Tailwind CSS",    "PostgreSQL",
    "Next.js",         "MongoDB",
    "AWS"   
  ]
}`}</pre>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;