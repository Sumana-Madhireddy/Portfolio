import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { IoCodeSlash } from "react-icons/io5";
import { AiOutlineDatabase } from "react-icons/ai";
import { CiMobile3 } from "react-icons/ci";

function About() {
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      y: -50, 
      transition: { duration: 0.8, ease: "easeIn" }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeOut", delay: 0.3 } 
    },
    exit: { 
      opacity: 0, 
      y: -50, 
      transition: { duration: 0.8, ease: "easeIn" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 1, 
        ease: "easeOut", 
      }
    },
    exit: { 
      opacity: 0, 
      x: 100, 
      transition: { duration: 0.8, ease: "easeIn" }
    }
  };

  const cardsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, 
      }
    }
  };

  return (
    <section id="about" className="about__me">
      {/* Heading Animation */}
      <motion.div 
        className="overview"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ amount: 0.5 }} // Trigger when 50% of the element is in view
      >
        <h1>About me</h1>
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
          With over two years of experience in software development, I have a
          strong focus on creating efficient, user-centric applications. From
          leading the development of RedPrint, an innovative gym-focused Android
          app, to optimizing systems and building responsive user interfaces at
          Deloitte, my work reflects a commitment to delivering impactful
          solutions. I thrive on solving challenging problems and staying
          updated with the latest technologies to build products that make a
          difference. Outside of work, I enjoy exploring creative pursuits,
          staying active, and discovering new inspirations. Feel free to explore
          my portfolio and get in touch to discuss exciting opportunities!
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
          <IoCodeSlash style={{height: '20px', width: '20px'}} />
          <p>Frontend</p>
        </motion.div>
        <motion.div className="card" variants={cardVariants}>
          <AiOutlineDatabase  style={{height: '18px', width: '18px'}} />
          <p>Backend</p>
        </motion.div>
        <motion.div className="card" variants={cardVariants}>
          <CiMobile3 style={{height: '20px', width: '20px'}} />
          <p>Mobile</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
