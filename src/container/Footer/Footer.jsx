import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaLeetcode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer__content">
        <div className="footer__info">
          <h2>Let's Connect!</h2>
          <p>Feel free to reach out to me through any of these platforms:</p>
        </div>

        <div className="footer__socials">
          <a
            href="https://github.com/Sumana-Madhireddy/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sumana-madhireddy-b8aa49186/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sumanamadhireddy3@gmail.com"
            className="social-link"
          >
            <FaEnvelope />
          </a>
          {/* <a
            href="https://leetcode.com/yourleetcodeusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <SiLeetcode />
          </a> */}
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} · Built with ❤️️ Sumana
        </p>
      </div>
    </footer>
  );
};

export default Footer;
