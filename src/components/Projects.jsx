import React from "react";
import { ExternalLink } from "lucide-react";
import "./Projects.css"; // Import your CSS file

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio built with React and Tailwind CSS to showcase my development skills and projects.",
    link: "https://yourportfolio.com",
    github: "https://github.com/yourgithub/portfolio",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-Commerce App",
    desc: "A complete e-commerce platform with product search, cart, checkout, and admin dashboard features.",
    link: "https://yourecommerce.com",
    github: "https://github.com/yourgithub/ecommerce",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Blog Platform",
    desc: "A MERN blog with secure JWT auth and full CRUD capabilities. Users can write in Markdown.",
    link: "https://yourblog.com",
    github: "https://github.com/yourgithub/blog",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h3 className="projects-title">Projects</h3>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <h4 className="project-name">{project.title}</h4>
          <p className="project-desc">{project.desc}</p>
          <div className="project-tags">
            <span className="tag">⚛️ React</span>
            <span className="tag">🎨 Tailwind</span>
            <span className="tag">🍃 MongoDB</span>
            <span className="tag">🟢 Node.js</span>
          </div>
          <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
            View Live <ExternalLink className="external-link-icon" />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className="project-github">
            GitHub Repo
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;