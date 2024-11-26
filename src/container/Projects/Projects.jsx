// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Typewriter from 'typewriter-effect';
// import { FaGithub } from 'react-icons/fa';
// import './Projects.scss';
// import { projects } from '../../constants';

// const Projects = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeProject, setActiveProject] = useState(null);

//   const openModal = (project) => {
//     setActiveProject(project);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setActiveProject(null);
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, x: -100 },  
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { type: 'spring', stiffness: 200, damping: 10 },  
//     },
//   };

//   return (
//     <section id="projects" className="projects">
//       <motion.div
//         className="projects_title"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Typewriter
//           options={{
//             strings: ['Projects'],
//             autoStart: true,
//             loop: true,
//           }}
//         />
//       </motion.div>

//       <motion.div
//         className="projects__list"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           visible: { transition: { staggerChildren: 0.3 } },  
//         }}
//       >
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="project-card-horizontal"
//             variants={cardVariants}  
//             whileInView="visible"
//             initial="hidden"
//             viewport={{ once: false, amount: 0.5 }}  
//             // onClick={() => openModal(project)}
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="project-card-horizontal__image"
//             />
//             <div className="project-card-horizontal__details">
//               <h3>{project.title}</h3>
//               {/* <p>{project.description}</p> */}
//               <div className="project-description">
//                 <ul>
//                   {Array.isArray(project.description) 
//                     ? project.description.map((sentence, index) => (
//                         <li key={index}>{sentence}</li>
//                       ))
//                     : <li>{project.description}</li> 
//                   }
//                 </ul>
//               </div>

//               <div className="project-card-horizontal__techs">
//                 {project.technologies.map((tech, idx) => (
//                   <span key={idx} className="tech-badge">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="project-card-horizontal__footer">
//                 <div className="project-card-horizontal__team">
//                   {project.team.map((teammate, idx) => (
//                     <a
//                       key={idx}
//                       href={teammate.linkedin} 
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <img
//                         src={teammate.image}
//                         alt={teammate.name}
//                         className="team-member"
//                       />
//                     </a>
//                   ))}
//                 </div>
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="project-card-horizontal__github"
//                 >
//                   <FaGithub />
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {isModalOpen && (
//         <div className="modal" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <h2>{activeProject.title}</h2>
//             <p>{activeProject.details}</p>
//             <div className="modal-techs">
//               {activeProject.technologies.map((tech, idx) => (
//                 <span key={idx} className="tech-badge">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Projects;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaGithub } from 'react-icons/fa';
import './Projects.scss';
import { projects } from '../../constants';
import { FaBeer } from 'react-icons/fa';
import { IoIosMore } from "react-icons/io";

const Projects = () => {
  const [isFullDescriptionVisible, setIsFullDescriptionVisible] = useState({});

  const toggleFullDescription = (index) => {
    setIsFullDescriptionVisible((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 200, damping: 10 },
    },
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
            strings: ['Projects'],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.div>

      <motion.div
        className="projects__list"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card-horizontal"
            variants={cardVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: false, amount: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-card-horizontal__image"
            />
            <div className="project-card-horizontal__details">
              <h3>{project.title}</h3>
              <div className="project-description">
                <ul>
                  {Array.isArray(project.description) ? (
                    project.description.map((sentence, idx) => (
                      <li key={idx}>{sentence}</li>
                    ))
                  ) : (
                    <li>{project.description}</li>
                  )}
                </ul>
              </div>
              {/* See More Button */}
              {project.details && (
                <button
                  className="see-more-btn"
                  onClick={() => toggleFullDescription(index)}
                >
                  {isFullDescriptionVisible[index] ? 'See Less' : 'See More'} 
                  <IoIosMore />
                </button>
              )}

              <div className="project-card-horizontal__techs">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {isFullDescriptionVisible[index] && (
                <div className="full-description">
                  <p>{project.details}</p>
                </div>
              )}

              <div className="project-card-horizontal__footer">
                <div className="project-card-horizontal__team">
                  {project.team.map((teammate, idx) => (
                    <a
                      key={idx}
                      href={teammate.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={teammate.image}
                        alt={teammate.name}
                        className="team-member"
                      />
                    </a>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-horizontal__github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
