import React, { useEffect, useRef } from "react";
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
        <h1>
          <span className="firstName">Sameh</span>

          <span className="lastName">Rizk</span>
        </h1>

        <h2>Frontend Developer</h2>

        <span>
          <a
            href="https://www.linkedin.com/in/sameh-rizk-abb5ba258"
            target="_blank"
          >
            <FontAwesomeIcon
              className="fa-icons"
              icon={faLinkedin}
              size="2x"
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </a>

          <a href="https://github.com/SamRizk194" target="_blank">
            <FontAwesomeIcon
              className="fa-icons"
              icon={faGithub}
              size="2x"
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </a>

          <a href="https://www.facebook.com/share/1GCB3g1Vtk/" target="_blank">
            <FontAwesomeIcon
              className="fa-icons"
              icon={faFacebook}
              size="2x"
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </a>
        </span>

        <p className="description" ref={typedElement}></p>

        <a href={CV} download>
          <button
            className="
    font-semibold
    bg-[#00FF08]
    text-[#222]
    px-6 py-4
    rounded-[20px]
    cursor-pointer
    tracking-[1px]
    transition-all
    duration-500
    ease-out
    shadow-[0_0_15px_#00FF08]
    hover:scale-[1.05]
    hover:shadow-[0_0_5px_#00FF08,0_0_15px_#00FF08,0_0_30px_#00FF08]

    active:scale-[0.98]
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
