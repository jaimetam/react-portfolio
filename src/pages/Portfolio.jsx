import React from "react";
import Project from "../components/Project"
import Project1 from "../assets/images/Screenshot (33).png"
import Project2 from "../assets/images/Screenshot (34).png"


function Portfolio() {
  const projects = [
    {
      title: 'Social Network API',
            image: Project1,
            deployedLink: 'https://jaimetam.github.io/e-commerce-backend/',
            repoLink: 'https://github.com/jaimetam/e-commerce-backend'
    },
    {
      title: 'logo-svg-generator',
            image: Project2,
            repoLink: 'https://github.com/jaimetam/Logo-svg-Generator'
    }
    // ... more projects
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
}
export default Portfolio; 