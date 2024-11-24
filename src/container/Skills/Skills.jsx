// import React, { useState } from "react";
// import "./Skills.scss";
// import { motion } from "framer-motion";
// import { images } from "../../constants";

// const skills = [
//   { name: "C", icon: images.c },
//   { name: "C++", icon: images.cpp },
//   { name: "C#", icon: images.csharpe },
//   { name: "Java", icon: images.java },
//   { name: "Python", icon: images.python },
//   { name: "JavaScript", icon: images.javascript },
//   { name: "TypeScript", icon: images.typescript },
//   { name: "React", icon: images.react },
//   { name: "Node.js", icon: images.node },
//   { name: "REST APIs", icon: images.api },
//   { name: "HTML", icon: images.html },
//   { name: "CSS", icon: images.css },
//   { name: "Docker", icon: images.docker },
//   { name: "Git", icon: images.git },
//   { name: "MySQL", icon: images.mysql },
//   { name: "PostgreSQL", icon: images.postgresql },
//   { name: "MongoDB", icon: images.mongodb },
//   { name: "AWS", icon: images.aws },
//   { name: "Firebase", icon: images.firebase },
// ];

// const Skills = () => {
//   const headingVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//     exit: {
//       opacity: 0,
//       y: -50,
//       transition: { duration: 0.8, ease: "easeIn" },
//     },
//   };

//   return (
//     <section id="skills" className="skills">
//       {/* Heading Animation */}
//       <motion.div
//         className="skills__heading"
//         variants={headingVariants}
//         initial="hidden"
//         whileInView="visible"
//         exit="exit"
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         <p className="typewriter">Skills</p>
//       </motion.div>

//       {/* Skills Container */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         className="skills__container"
//       >
//         {skills.map((skill, index) => (
//           <motion.div
//             className="skill"
//             key={index}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{duration: 0.4,ease: "easeOut",delay: index * 0.1,type: "spring",stiffness: 500,}}
//             whileHover={{ scale: 1.1,}}
//           >
//             <img src={skill.icon} alt={skill.name} />
//             <p>{skill.name}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;

import React, { useState } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { images } from "../../constants";

const skills = [
  { name: "C", icon: images.c },
  { name: "C++", icon: images.cpp },
  { name: "C#", icon: images.csharpe },
  { name: "Java", icon: images.java },
  { name: "Python", icon: images.python },
  { name: "JavaScript", icon: images.javascript },
  { name: "TypeScript", icon: images.typescript },
  { name: "React", icon: images.react },
  { name: "Node.js", icon: images.node },
  { name: "REST APIs", icon: images.api },
  { name: "HTML", icon: images.html },
  { name: "CSS", icon: images.css },
  { name: "Docker", icon: images.docker },
  { name: "Git", icon: images.git },
  { name: "MySQL", icon: images.mysql },
  { name: "PostgreSQL", icon: images.postgresql },
  { name: "MongoDB", icon: images.mongodb },
  { name: "AWS", icon: images.aws },
  { name: "Firebase", icon: images.firebase },
];

const Skills = () => {
  const [animationKey, setAnimationKey] = useState(0); 

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="skills"
    >
      {/* Heading Animation */}
      {/* <motion.div
        className="skills__heading"
        variants={headingVariants}
        initial="hidden"
        whileInView={{ opacity: 1, y: 0 }}
        onViewportEnter={() => setAnimationKey((prev) => prev + 1)}
        viewport={{ once: false, amount: 0.5 }}
      >
        <p key={animationKey}  className="typewriter">
          Skills
        </p>
      </motion.div> */}
      <motion.div
        className="skills__heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typewriter
          options={{
            strings: ["Skills"],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.div>

      {/* Skills Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="skills__container"
      >
        {skills.map((skill, index) => (
          <motion.div
            className="skill"
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: index * 0.1,
              // type: "spring",
              // stiffness: 500,
            }}
            // whileHover={{ scale: 1.1 }}
          >
            <motion.img 
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
              src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;

