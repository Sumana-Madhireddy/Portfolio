import React, {useState, useEffect} from "react";
import "./Header.scss";
import { BsSendFill } from "react-icons/bs";
import { BsMouse } from "react-icons/bs";
import { motion } from 'framer-motion';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const aboutTop = aboutSection.getBoundingClientRect().top;
      const headerHeight = window.innerHeight;

      if (aboutTop < headerHeight / 2) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="header">
      <div className="header__main">
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="header__content"
        >
          {/* Name */}
          <motion.h1
            className="header__name"
            variants={headerItemVariants}
          >
            <span className="header__hello">Hello,</span>
            <span className="header__wave">👋</span>
            <span className="header__name-highlight"> I'm Sumana Madhireddy</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="header__description"
            variants={headerItemVariants}
          >
            Software developer with experience in full-stack development, building practical solutions focused on creating efficient, user-friendly applications.
          </motion.p>

          {/* Button */}
          <motion.button
            className="header__button"
            variants={headerItemVariants}
            whileHover={{
              scale: 1.1, 
              boxShadow: "0px 5px 15px rgba(255, 223, 0, 0.6)", 
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Say Hello <BsSendFill />
          </motion.button>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="header__image"
        ></motion.div>
      </div>
      <motion.div
      className="header__scroll"
      onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20,
        transition: { duration: 0.5 },
      }}
    >
      <BsMouse style={{ height: "30px", width: "30px" }} />
      <span>Scroll down ↓</span>
    </motion.div>
    </section>
  );
};

export default Header;
