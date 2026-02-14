import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import CV from "../../assets/Sameh-rizk-Frontend.pdf";
import { useTheme } from "../../common/ThemeContext";
import Lottie from "react-lottie";
import animationData from "../../animation/dev.json";

function Hero() {
  const { theme } = useTheme();
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
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  const spanVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const iconVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  const h2Variant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  useEffect(() => {
    if (!typedElement.current) return;

    const typed = new Typed(typedElement.current, {
      strings: [
        "With a passion for developing modern React web apps for commercial businesses.",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="containerr scroll-mt-20" id="home">
      <div className="colorModeContainer">
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          className="hero"
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
            href="https://www.linkedin.com/in/sameh-rizk-abb5ba258"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariant}
            initial="hidden"
            animate="visible"
          >
            <FontAwesomeIcon
              className="fa-icons"
              icon={faLinkedin}
              size="2x"
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </motion.a>

          <motion.a
            href="https://github.com/SamRizk194"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariant}
            initial="hidden"
            animate="visible"
          >
            <FontAwesomeIcon
              className="fa-icons"
              icon={faGithub}
              size="2x"
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </motion.a>

          <motion.a
            href="https://www.facebook.com/share/1GCB3g1Vtk/"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariant}
            initial="hidden"
            animate="visible"
          >
            <FontAwesomeIcon
              className="fa-icons"
              icon={faFacebook}
              size="2x"
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </motion.a>
        </span>

        <p className="description" ref={typedElement}></p>

        <a href={CV} download>
          <button
            className="
                bg-[var(--text-color)]
                text-[var(--background-color)]
                border-0
                rounded-[20px]
                w-[126px]
                h-[50px]
                text-[20px]
                font-semibold
                shadow-lg
                transition-all
                duration-300
                ease-out
                hover:scale-[1.03]
                hover:shadow-xl
                active:scale-[0.98]
                active:shadow-md
              "
          >
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
