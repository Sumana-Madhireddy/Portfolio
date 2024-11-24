import React from "react";
import { motion } from "framer-motion";

const TimelineItem = ({ position, company, date, details }) => {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <div className="timeline-item__content">
      <h3 className="timeline-item__position"><span>{position}</span> | {company}</h3>
        {/* <h3 className="timeline-item__company">{company}</h3> */}
        <p className="timeline-item__date">{date}</p>
        <ul className="timeline-item__details">
          {details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
