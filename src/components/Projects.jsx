import React from "react";
import { ExternalLink } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=800&q=80",
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
  <section id="projects" className="mt-16 px-6" data-aos='fade-up'>
    <h3 className="text-3xl font-bold mb-6 text-center">Projects</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-800 hover:to-gray-700 shadow-lg hover:shadow-cyan-500/40 cursor-pointer"
          data-aos="zoom-in"
        >
          <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
          <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
          <p className="text-gray-400 mb-3 text-sm">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span title="React JS" className="text-xs bg-cyan-900 text-cyan-200 px-2 py-1 rounded hover:scale-110 hover:shadow-md hover:bg-cyan-700 transition-all duration-200 flex items-center gap-1">⚛️ <span>React</span></span>
            <span title="Tailwind CSS" className="text-xs bg-cyan-900 text-cyan-200 px-2 py-1 rounded hover:scale-110 hover:shadow-md hover:bg-cyan-700 transition-all duration-200 flex items-center gap-1">🎨 <span>Tailwind</span></span>
            <span title="MongoDB" className="text-xs bg-cyan-900 text-cyan-200 px-2 py-1 rounded hover:scale-110 hover:shadow-md hover:bg-cyan-700 transition-all duration-200 flex items-center gap-1">🍃 <span>MongoDB</span></span>
            <span title="Node.js" className="text-xs bg-cyan-900 text-cyan-200 px-2 py-1 rounded hover:scale-110 hover:shadow-md hover:bg-cyan-700 transition-all duration-200 flex items-center gap-1">🟢 <span>Node.js</span></span>
          </div>
          <a href={project.link} target="_blank" rel="noreferrer" className="text-cyan-400 text-sm inline-flex items-center hover:underline mb-2 mt-3">
            View Live <ExternalLink className="ml-1 w-4 h-4" />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className="block text-sm text-gray-300 hover:text-cyan-400">
            GitHub Repo
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
