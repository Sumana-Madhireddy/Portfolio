// import React from 'react';
// import './projects.scss';

// const projects = () => {
//   return (
//     <div>
//       projects
//     </div>
//   )
// }

// export default projects;


// import React from 'react';
// import { motion } from 'framer-motion';
// import './Projects.scss';

// const Projects = () => {
//   const experiences = [
//     {
//       role: 'RedPrint, Android App Development',
//       company: 'University at Buffalo, The State University of New York',
//       duration: 'August 2024 - ongoing',
//       points: [
//         'Led the development of a gym-focused Android app for 10+ screens using React Native, integrating NFC for quick access to instructional videos and personalized projectsouts.',
//         'Integrated Google Sign-In, Firebase, and AWS S3 for efficient authentication and video content management, improving onboarding efficiency by 25%.',
//         'Successfully deployed the app to the Google Play Store, targeting 1,000+ downloads while optimizing based on user feedback.',
//         'Revamped an admin website by integrating secure payment gateways with encryption and fraud detection for seamless gym membership transactions.',
//         'Continuously optimized performance and provided backend support to enhance transaction reliability and user experience based on feedback.',
//         'Built an AWS Lambda function using JavaScript and FFmpeg to generate video thumbnails, enhancing content delivery.',
//       ],
//     },
//     {
//       role: 'Analyst',
//       company: 'Deloitte | India',
//       duration: 'September 2022 - July 2023',
//       points: [
//         'Customized Salesforce CRM and developed over 15 responsive LWCs using JavaScript, HTML, and CSS, enhancing user interfaces and engagement by 35%.',
//         'Migrated legacy components to LWCs, reducing page load times by 50% and optimizing frontend performance.',
//         'Collaborated on system optimization, writing efficient Apex triggers, SOQL queries, and processes, improving data retrieval and automation by 30%.',
//       ],
//     },
//     {
//       role: 'Developer Intern',
//       company: 'Deloitte | India',
//       duration: 'May 2022 - August 2022',
//       points: [
//         'Gained hands-on Salesforce development experience, building LWCs, Apex triggers, and enhancing custom components.',
//         'Achieved Salesforce Platform Developer 1 certification, delivering solutions in collaboration with senior developers.',
//       ],
//     },
//   ];

//   return (
//     <section id="projects" className="projects-section">
//       <motion.h2
//         className="section-title"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Professional Experience
//       </motion.h2>
//       <div className="projects-container">
//         {experiences.map((exp, index) => (
//           <motion.div
//             className="projects-card"
//             key={index}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
//             <h3 className="role">{exp.role}</h3>
//             <p className="company">{exp.company}</p>
//             <p className="duration">{exp.duration}</p>
//             <ul className="points">
//               {exp.points.map((point, idx) => (
//                 <motion.li
//                   key={idx}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {point}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;



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
