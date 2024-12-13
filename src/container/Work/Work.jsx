import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "./Work.scss";
import { images } from "../../constants"; 

const experience = [
  {
    position: "Software Development Engineer",
    company: "RedPrint",
    date: "January 2024 - Ongoing",
    icon: images.redprint,
    details: [
      "Led the development of a gym-focused Android app using React Native, integrating NFC for quick access to instructional videos and personalized workouts.",
      "Integrated Google Sign-In, Firebase, and AWS S3, improving onboarding efficiency by 25%.",
      "Built an AWS Lambda function using JavaScript and FFmpeg to generate video thumbnails, enhancing content delivery.",
      "Revamped an admin website by integrating secure payment gateways with encryption and fraud detection.",
    ],
    technologies: [
      "React.js",
      "React Native",
      "TypeScript",
      "Node.js",
      "AWS S3",
      "Firebase",
      "JavaScript",
      "Tailwind",
      "Postman"
    ]
  },
  {
    position: "Salesforce Developer",
    company: "Deloitte",
    date: "September 2022 - July 2023",
    icon: images.deloitte,
    details: [
      "Customized Salesforce CRM and developed 15+ responsive LWCs, boosting engagement by 35%.",
      "Migrated legacy components to LWCs, reducing page load times by 50%.",
      "Optimized systems with Apex triggers and SOQL queries, improving automation by 30%.",
      "Collaborated with onshore teams and business analysts to deliver tailored Salesforce solutions, enhancing client relationships."
    ],
    technologies: [
      "Salesforce",
      "HTML",
      "CSS",
      "JavaScript",
      "API"
    ]
  },
  {
    position: "Developer Intern",
    company: "Deloitte",
    date: "May 2022 - August 2022",
    icon: images.deloitte,
    details: [
      "Collaborated with cross-functional teams to design and deploy automated workflows, boosting task efficiency.",
      "Built LWCs and Apex triggers while gaining hands-on Salesforce development experience.",
      "Achieved Salesforce Platform Developer 1 certification.",
    ],
    technologies: [
      "Salesforce",
      "HTML",
      "CSS",
      "JavaScript"
    ]
  },
];

const Work = () => {
  return (
    <section id="work" className="work">
      {/* Typing Effect */}
      <motion.div
        className="work__heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typewriter
          options={{
            strings: ["Work"],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.div>

      {/* Vertical Timeline */}
      <VerticalTimeline>
        {experience.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "#1a1a1a",
              color: "#e4e4e4",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(255, 255, 255, 0.5)",
            }}
            contentArrowStyle={{ borderRight: "10px solid #1d1836" }}
            date={item.date}
            iconStyle={{
              background: "white",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              overflow: "hidden", 
            }}
            icon={
              <img
                src={item.icon}
                alt={item.company}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            }
          >
            <h3 className="timeline-item__position">
              <span>{item.position}</span> | {item.company}
            </h3>
            <ul className="timeline-item__details">
              {item.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <div className="technology-divs">
              {item.technologies.map((tech, idx) => (
                <div key={idx} className="technology-div">
                  {tech}
                </div>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Work;
