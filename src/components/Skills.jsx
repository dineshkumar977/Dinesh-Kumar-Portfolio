import "./Skills.css";


function Skills() {

  const skills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Redux Toolkit",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "AWS",
    "REST APIs",
    "Git",
    "Figma",
  ];

  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <h2>Tech Stack</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;