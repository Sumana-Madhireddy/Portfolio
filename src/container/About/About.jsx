import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { CgWebsite } from "react-icons/cg";
import { IoCodeSlash } from "react-icons/io5";
import { AiOutlineDatabase } from "react-icons/ai";
import { CiMobile3 } from "react-icons/ci";
import "./About.scss";
import {images} from "../../constants";

function About() {

  const [role, setRole] = useState('Software');

  useEffect(() => {
    const roles = ['Software', 'Fullstack', 'Backend'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % roles.length;  // Loop through the roles
      setRole(roles[index]);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);  // Cleanup interval on unmount
  }, []);

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
          <h2>Who <span>am I?</span></h2>
          <p>
          I’m a software developer focused on building user-centric solutions, 
          whether optimizing e-commerce platforms, developing AI models, or creating seamless mobile apps.
          </p>
        </motion.div>

        <motion.div
          className="tile education-tile"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tileVariants}
          custom="up"
          whileHover={{ scale: 1.05 }}
        >
          <h3>Education</h3>
          <div className="education-info">
            <div className="education-school">
              <img src={images.UB} alt="University at Buffalo" className="education-logo" />
              <div>
                <p className="university-name"><strong>University at Buffalo, SUNY</strong></p>
                <p className="degree"><strong>Master of Science (MS) in Computer Science and Engineering</strong></p>
                <p className="duration"><em>Aug 2023 - Dec 2024 | Grade: 3.75</em></p>
              </div>
            </div>

            <div className="coursework">
              <p><strong>Courses:</strong></p>
              <ul className="courses-list">
                <li>Analysis of Algorithms</li>
                <li>Machine Learning</li>
                <li>Operating Systems</li>
                <li>Data-Intensive Computing</li>
                <li>Deep Learning</li>
                <li>Database & Management Systems</li>
              </ul>
            </div>
          </div>
        </motion.div>


        {/* Quote Tile */}
        <motion.div
          className="tile quote-tile"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tileVariants}
          custom="left"
          whileHover={{ scale: 1.05 }}
        >
          <p>Always <span>learning</span> and <span>evolving</span> with every project!</p>
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
          <h3>
            <motion.div
              key={role} 
              initial={{ rotateX: -90 }}
              animate={{ rotateX: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1, 
              }}
              className="dice-role"
            >
              {role}
            </motion.div>
            <span> Developer</span>
          </h3>
          <p>Crafting scalable, innovative, and impactful solutions.</p>
        </motion.div>

        {/* Info Tile 1 */}
        <motion.div
          className="tile service-tile"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tileVariants}
          custom="down"
          whileHover={{ scale: 1.05 }}
        >
          <h3>Services I offer</h3>
          <div className="skills-icons">
            <div>
              <CgWebsite style={{ height: "20px", width: "20px" }} />
              <p>Frontend</p>
            </div>
            <div>
              <IoCodeSlash style={{ height: "18px", width: "18px" }} />
              <p>Backend</p>
            </div>
            <div>
              <AiOutlineDatabase style={{ height: "18px", width: "18px" }} />
              <p>DataBase</p>
            </div>
            <div>
              <CiMobile3 style={{ height: "20px", width: "20px" }} />
              <p>Mobile</p>
            </div>
          </div>
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
          <h3>What <span>Drives</span> Me</h3>
          <p>
            The passion for solving complex problems and creating solutions that enhance user experiences, streamline processes, and bring ideas to life through technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
