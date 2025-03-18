import "./Hero.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import CV from "../../assets/cv.pdf";

function Hero() {
  return (
    <section id="hero" className="container">
      <div className="colorModeContainer">
        <img src={heroImg} className="hero" alt="img" />
        <img src={themeIcon} className="colorMode" alt="ico" />
      </div>
      <div className="info">
        <h1>
          Sameh
          <br />
          Rizk
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/SamRizk194" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{ color: "black" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sameh-rizk-abb5ba258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmfCB8tZmSbG1ozOtE%2BGubQ%3D%3D"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{ color: "black" }}
            />
          </a>
          <a href="https://www.facebook.com/sameh.ozmel/" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              style={{ color: "black" }}
            />
          </a>
        </span>
        <p>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resum</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
