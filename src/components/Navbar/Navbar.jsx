import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = 0;

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        lastScrollY = window.scrollY <= 0 ? 0 : window.scrollY; 
    };

    const handleMouseMove = (e) => {
        if (e.clientY < 10) {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <nav className={`app__navbar ${isVisible ? "show" : "hide"}`}>
            <ul className="app__navbar-links">
                {['home', 'about', 'skills', 'work', 'projects', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {['home', 'about', 'skills', 'work', 'projects', 'contact'].map((item) => (
                                <li key={item}>
                                    <a onClick={() => setToggle(false)} href={`#${item}`}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
