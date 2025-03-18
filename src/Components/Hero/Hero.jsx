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

  return (
    <section className="container">
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
        <h1>
          Sameh
          <br />
          Rizk
        </h1>
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
        <p className="description">
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
