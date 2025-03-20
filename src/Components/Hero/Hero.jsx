import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import "./Hero.css";
import heroImg from "../../assets/hero-img.png";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const typedElement = useRef(null);

  const hVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const spanVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const options = {
      strings: [
        "With a passion for developing modern React web apps for commercial businesses.",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
      showCursor: false,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="containerr">
      <div className="colorModeContainer">
        <img src={heroImg} className="hero" alt="img" />
        <img
          src={theme === "light" ? sunIcon : moonIcon}
          className="colorMode"
          alt="theme-icon"
          onClick={toggleTheme}
        />
      </div>

      <div className="info">
        <motion.h1
          variants={hVariant}
          initial="hidden"
          animate="visible"
          className="name"
        >
          <motion.span variants={spanVariant} className="firstName">
            Sameh
          </motion.span>
          <motion.span variants={spanVariant} className="lastName">
            Rizk
          </motion.span>
        </motion.h1>
        <h2>Frontend Developer</h2>
        <span>
          <a
            href="https://github.com/SamRizk194"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sameh-rizk-abb5ba258"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </a>
          <a
            href="https://www.facebook.com/sameh.ozmel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </a>
        </span>
        <p className="description" ref={typedElement}></p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
