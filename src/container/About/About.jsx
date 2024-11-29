import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { CgWebsite } from "react-icons/cg";
import { IoCodeSlash } from "react-icons/io5";
import { AiOutlineDatabase } from "react-icons/ai";
import { CiMobile3 } from "react-icons/ci";
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
          <h2>Who <span>am I?</span></h2>
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
          <h3><span>Services</span> I offer</h3>
          <div className="skills-icons">
            <div >
              <CgWebsite style={{ height: "20px", width: "20px" }} />
              <p>Frontend</p>
            </div>
            <div >
              <IoCodeSlash style={{ height: "18px", width: "18px" }} />
              <p>Backend</p>
            </div>
            <div >
              <AiOutlineDatabase style={{ height: "18px", width: "18px" }} />
              <p>DataBase</p>
            </div>
            <div >
              <CiMobile3 style={{ height: "20px", width: "20px" }} />
              <p>Mobile</p>
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
          <h3>Software <span>Developer</span></h3>
          <p>Crafting scalable, innovative, and impactful solutions.</p>
        </motion.div>

        

        {/* Info Tile 1 */}
        <motion.div
          className="tile info1-tile"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tileVariants}
          custom="down"
          whileHover={{ scale: 1.05 }}
        >
          <h3>Current <span>Projects</span></h3>
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
          <h3>What <span>Drives</span> Me</h3>
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
