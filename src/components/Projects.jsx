import "./Projects.css";
import analyticsImg from "../assets/analytics.jpg";
import tournamentImg from "../assets/tournament.jpeg";
import enterpriseImg from "../assets/enterprise.jpeg";


function Projects() {
  const projects = [
  {
  title: "Golf Analytics Platform",
  image: analyticsImg,
  description: "Built a platform for golf shot visualization, analytics and performance tracking using Google Maps APIs.",
  tech: "React • Node.js • PostgreSQL • AWS",
  live: "https://your-demo-link.com",
  github: "https://github.com/yourusername/project1"
},
  {
    title: "Tournament Management System",
    image: tournamentImg,
    description:
      "Developed scheduling, onboarding and event management features for tournaments.",
    tech: "Next.js • Express.js • PostgreSQL",
    live: "#",
  github: "#"
  },
  {
    title: "Enterprise Dashboard",
    image:enterpriseImg,
    description:
      "Created dynamic dashboards, benchmark analytics and reporting systems.",
    tech: "React • Redux Toolkit • REST APIs",
     live: "#",
  github: "#"
  },
];
  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2>Projects I've Built</h2>
      

      <div className="projects-grid">
        {projects.map((project, index) => (
            
          <div className="project-card" key={index}>
                    <img
    src={project.image}
    alt={project.title}
    className="project-image"
  />

    
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.tech}</span>

            <div className="project-buttons">

  <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
  >
    <button>Live Demo</button>
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
  >
    <button>GitHub</button>
  </a>

</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;