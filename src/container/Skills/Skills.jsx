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
  { name: "Springboot", icon: images.springboot },
];

const Skills = () => {

  return (
    <section
      id="skills"
      className="skills"
    >
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
        className="skills__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            className="skill"
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            viewport={{ once: true, amount: 0.3 }}
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

