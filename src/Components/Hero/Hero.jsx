import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import "./Hero.css";
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
import Lottie from "react-lottie";
import animationData from "../../animation/dev.json";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const typedElement = useRef(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const hVariant = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
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
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const iconVariant = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const h2Variant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
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
      loop: true,
      showCursor: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="containerr">
      <div className="colorModeContainer">
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          className="hero"
        />
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

        <motion.h2 variants={h2Variant} initial="hidden" animate="visible">
          Frontend Developer
        </motion.h2>

        <span>
          <motion.a
            href="https://github.com/SamRizk194"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariant}
            initial="hidden"
            animate="visible"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sameh-rizk-abb5ba258"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariant}
            initial="hidden"
            animate="visible"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/sameh.ozmel/"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariant}
            initial="hidden"
            animate="visible"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </motion.a>
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
