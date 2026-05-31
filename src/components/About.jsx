import "./About.css";

function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">
        <div className="about-Me"><span>ABOUT ME</span></div>
      <div className="about-left">
        

        <h2>
          Building Scalable Products With Clean Architecture And Modern Technologies.
        </h2>
      </div>

      <div className="about-right">
        <p>
          I'm Dinesh Kumar, a Senior Full Stack Engineer with 6+ years of experience building modern web applications using React.js, Next.js, Node.js, PostgreSQL, and AWS.
          I specialize in developing scalable SaaS platforms, enterprise-grade dashboards, RESTful APIs, and high-performance user experiences.
          Passionate about writing clean, maintainable code and delivering solutions that drive business growth.

        </p>
        
      </div>
    </section>
  );
}

export default About;