import React, { useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { IoCodeSlash } from "react-icons/io5";
import { AiOutlineDatabase } from "react-icons/ai";
import { CiMobile3 } from "react-icons/ci";

function About() {

  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  };

  const cardsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section id="about" className="about__me">
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

      {/* Paragraph Animation */}
      <motion.div
        className="overview"
        variants={paragraphVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ amount: 0.5 }}
      >
        <p>
        A passionate and results-driven software developer with a strong foundation in full-stack web development, machine learning, and data science. 
        I recently completed my MS in Computer Science, where I gained hands-on experience in designing and building scalable applications.
        </p>
        <p>
        Currently, I'm working on several exciting projects, including Solenne, a modern e-commerce platform, and RedPrint, a gym management system. 
        My expertise spans React, Node.js, PostgreSQL, and machine learning techniques like hybrid deep learning architectures for crowd counting. 
        I am always eager to learn new technologies and solve real-world problems through clean and efficient code.
        </p>
        <p>
        I believe in creating user-centric, efficient, and innovative solutions. 
        Whether it's building intuitive web apps or leveraging data to drive business insights, I strive to make a meaningful impact through every project I take on.
        </p>
      </motion.div>

      {/* Cards Animation */}
      <motion.div
        className="cards"
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ amount: 0.5 }}
      >
        <motion.div className="card" variants={cardVariants}>
          <IoCodeSlash style={{ height: "20px", width: "20px" }} />
          <p>Frontend</p>
        </motion.div>
        <motion.div className="card" variants={cardVariants}>
          <AiOutlineDatabase style={{ height: "18px", width: "18px" }} />
          <p>Backend</p>
        </motion.div>
        <motion.div className="card" variants={cardVariants}>
          <CiMobile3 style={{ height: "20px", width: "20px" }} />
          <p>Mobile</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;

