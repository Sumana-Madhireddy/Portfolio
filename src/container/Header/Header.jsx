import React from "react";
import "./Header.scss";
import { images } from '../../constants';
import { BsSendFill } from "react-icons/bs";
import { BsMouse } from "react-icons/bs";
import {motion, transform} from 'framer-motion';

const Header = () => {
  const headerVariantsLeft = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 1, 
        ease: "easeOut",
      }
    },
    exit: { 
      x: 100, 
      opacity: 0, 
      transition: { 
        duration: 1, 
        ease: "easeInOut", // smoother exit
      } 
    }
  };
  const headerVariantsRight = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 1, 
        ease: "easeOut",
      }
    },
    exit: { 
      x: -100, 
      opacity: 0, 
      transition: { 
        duration: 1, 
        ease: "easeInOut", // smoother exit
      } 
    }
  };
  return (
    <section id="home" className="header">
      <div className="header__main">
        <motion.div
          variants={headerVariantsRight}
          initial="hidden"
          whileInView="visible"
          whileOutOfView="exit"
          viewport={{ once: false, amount: 0.5 }}
          className='header__content'
        >
          <h1 className="header__name">
            Sumana Madhireddy <span className="header__wave">👋</span>
          </h1>
          <p className="header__description">
          Software developer with experience in full-stack development, building practical solutions focused on creating efficient, user-friendly applications.
          </p>
          <button className="header__button">Say Hello <BsSendFill style={{top: '100px'}} /></button>
        </motion.div>
        <motion.div
          variants={headerVariantsLeft}
          initial="hidden"
          whileInView="visible"
          whileOutOfView="exit"
          viewport={{ once: false, amount: 0.5 }}
          className='header__image'
        ></motion.div>
      </div>
      <div className="header__scroll">
        <BsMouse style={{height: '30px', width: '30px'}}/>
        <span>Scroll down ↓</span>
      </div>
    </section>

  );
};

export default Header;

