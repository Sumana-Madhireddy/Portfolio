import React, { useState } from 'react';
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub } from 'react-icons/fa'; // For GitHub icon
import './Projects.scss';
import { projects } from '../../constants';


const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveProject(null);
  };

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects_title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typewriter
          options={{
            strings: ["Projects"],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.div>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => openModal(project)}
          >
            <img src={project.image} alt={project.title} className="project-card__image" />
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__techs">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__github">
              <FaGithub />
            </a>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.details}</p>
            <div className="modal-techs">
              {activeProject.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
