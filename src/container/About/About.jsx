// import React, { useState } from "react";
// import "./About.scss";
// import { motion } from "framer-motion";
// import Typewriter from "typewriter-effect";
// import { IoCodeSlash } from "react-icons/io5";
// import { AiOutlineDatabase } from "react-icons/ai";
// import { CiMobile3 } from "react-icons/ci";

// function About() {

//   const paragraphVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
//     },
//     exit: {
//       opacity: 0,
//       y: -50,
//       transition: { duration: 0.8, ease: "easeIn" },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, x: -100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 1,
//         ease: "easeOut",
//       },
//     },
//     exit: {
//       opacity: 0,
//       x: 100,
//       transition: { duration: 0.8, ease: "easeIn" },
//     },
//   };

//   const cardsContainerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   return (
//     <section id="about" className="about__me">
//       <motion.div
//         className="overview"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Typewriter
//           options={{
//             strings: ["About me"],
//             autoStart: true,
//             loop: true,
//           }}
//         />
//       </motion.div>

//       {/* Paragraph Animation */}
//       <motion.div
//         className="overview"
//         variants={paragraphVariants}
//         initial="hidden"
//         whileInView="visible"
//         exit="exit"
//         viewport={{ amount: 0.5 }}
//       >
//         <p>
//         A passionate and results-driven software developer with a strong foundation in full-stack web development, machine learning, and data science. 
//         I recently completed my MS in Computer Science, where I gained hands-on experience in designing and building scalable applications.
//         </p>
//         <p>
//         Currently, I'm working on several exciting projects, including Solenne, a modern e-commerce platform, and RedPrint, a gym management system. 
//         My expertise spans React, Node.js, PostgreSQL, and machine learning techniques like hybrid deep learning architectures for crowd counting. 
//         I am always eager to learn new technologies and solve real-world problems through clean and efficient code.
//         </p>
//         <p>
//         I believe in creating user-centric, efficient, and innovative solutions. 
//         Whether it's building intuitive web apps or leveraging data to drive business insights, I strive to make a meaningful impact through every project I take on.
//         </p>
//       </motion.div>

//       {/* Cards Animation */}
//       <motion.div
//         className="cards"
//         variants={cardsContainerVariants}
//         initial="hidden"
//         whileInView="visible"
//         exit="exit"
//         viewport={{ amount: 0.5 }}
//       >
//         <motion.div className="card" variants={cardVariants}>
//           <IoCodeSlash style={{ height: "20px", width: "20px" }} />
//           <p>Frontend</p>
//         </motion.div>
//         <motion.div className="card" variants={cardVariants}>
//           <AiOutlineDatabase style={{ height: "18px", width: "18px" }} />
//           <p>Backend</p>
//         </motion.div>
//         <motion.div className="card" variants={cardVariants}>
//           <CiMobile3 style={{ height: "20px", width: "20px" }} />
//           <p>Mobile</p>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// export default About;





// import React from "react";
// import "./About.scss";

// function About() {
//   return (
//     <section id="about" className="about-section">
//       <div className="tiles-container">
//         <div className="tile intro-tile">
//           <h2>Who am I?</h2>
//           <p>
//             Hey! My name is Sumana Madhireddy. I am a Full Stack Developer with
//             a passion for creating efficient software solutions. I thrive on
//             tackling new challenges and crafting meaningful projects.
//           </p>
//         </div>

//         <div className="tile skills-tile">
//           <h3>Technologies I have worked with</h3>
//           <div className="skills-icons">
//             <span>JavaScript</span>
//             <span>React</span>
//             <span>Node.js</span>
//             <span>PostgreSQL</span>
//             <span>Tailwind</span>
//           </div>
//         </div>

//         <div className="tile quote-tile">
//           <p>"The only way to do great work is to love what you do."</p>
//         </div>

//         <div className="tile role-tile">
//           <h3>Software Developer</h3>
//           <p>Crafting scalable, innovative, and impactful solutions.</p>
//         </div>

//         <div className="tile info1-tile">
//           <h3>info tile</h3>
//           <p>Crafting scalable, innovative, and impactful solutions.</p>
//         </div>

//         <div className="tile info2-tile">
//           <h1>info</h1>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;


import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "./About.scss";

function About() {
  const tileVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", bounce: 0.3, duration: 0.8 },
    },
  };

  return (
    <section id="about" className="about-section">
      <motion.div
        className="overview"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typewriter
          options={{
            strings: ["About me"],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.div>

      <div className="tiles-container">
        {/* Intro Tile */}
        <motion.div
          className="tile intro-tile"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tileVariants}
          custom="left"
          whileHover={{ scale: 1.05 }}
        >
          <h2>Who am I?</h2>
          <p>
            A passionate and results-driven software developer with a strong
            foundation in full-stack web development, machine learning, and data
            science.
          </p>
        </motion.div>

        {/* Skills Tile */}
        <motion.div
          className="tile skills-tile"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tileVariants}
          custom="up"
          whileHover={{ scale: 1.05 }}
        >
          <h3>Technologies I have worked with</h3>
          <div className="skills-icons">
            <span>React</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
            <span>Tailwind</span>
            <span>Machine Learning</span>
          </div>
        </motion.div>

        {/* Quote Tile */}
        <motion.div
          className="tile quote-tile"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tileVariants}
          custom="down"
          whileHover={{ scale: 1.05 }}
        >
          <p>"The only way to do great work is to love what you do."</p>
        </motion.div>

        {/* Role Tile */}
        <motion.div
          className="tile role-tile"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tileVariants}
          custom="right"
          whileHover={{ scale: 1.05 }}
        >
          <h3>Software Developer</h3>
          <p>Crafting scalable, innovative, and impactful solutions.</p>
        </motion.div>

        

        {/* Info Tile 1 */}
        <motion.div
          className="tile info1-tile"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tileVariants}
          custom="left"
          whileHover={{ scale: 1.05 }}
        >
          <h3>Current Projects</h3>
          <p>
            Working on Solenne, a modern e-commerce platform, and RedPrint, a
            gym management system.
          </p>
        </motion.div>

        {/* Info Tile 2 */}
        <motion.div
          className="tile info2-tile"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tileVariants}
          custom="right"
          whileHover={{ scale: 1.05 }}
        >
          <h3>What Drives Me</h3>
          <p>
            I aim to create user-centric, efficient, and innovative solutions
            that solve real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
