import "./Skills.css";
import H_tml from "../../assets/html.png";
import C_ss from "../../assets/css.png";
import J_s from "../../assets/js.png";
import B_ootstrap from "../../assets/bootstrap.png";
import T_ailwind from "../../assets/tailwind.png";
import R_eact from "../../assets/react.png";
import R_edux from "../../assets/redux.webp";
import R_outer from "../../assets/router.webp";
import H_ooks from "../../assets/hooks.png";
import F_ramer from "../../assets/framer.svg";
import G_it from "../../assets/git.png";
import G_ithub from "../../assets/github.webp";
import N_pm from "../../assets/npm.svg";
import V_ite from "../../assets/vite.svg";
import F_awesome from "../../assets/font-awesome.png";
import L_ottie from "../../assets/lottie.webp";
import Lottie from "react-lottie";
import animationData1 from "../../../src/animation/arrow.json";

function Skills() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="arrow">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <section className="skills-section scroll-mt-20" id="skills">
        <div className="skills-header">
          <h2 className="skills-title">
            Skills <span>&amp;</span> Tools
          </h2>
          <p className="skills-subtitle">
            I Work Hard To Improve My Skills Regularly
          </p>
        </div>

        <div className="skills-list">
          <div className="skill-card">
            <img src={H_tml} alt="HTML" className="skill-logo" />
            <h3 className="skill-name">HTML</h3>
          </div>

          <div className="skill-card">
            <img src={C_ss} className="skill-logo" alt="css" />
            <h3 className="skill-name">CSS</h3>
          </div>

          <div className="skill-card">
            <img src={B_ootstrap} alt="Bootstrap" className="skill-logo" />
            <h3 className="skill-name">Bootstrap</h3>
          </div>

          <div className="skill-card">
            <img src={T_ailwind} alt="tailwind" className="skill-logo" />
            <h3 className="skill-name">Tailwind</h3>
          </div>

          <div className="skill-card">
            <img src={J_s} alt="js" className="skill-logo" />
            <h3 className="skill-name">JavaScript</h3>
          </div>

          <div className="skill-card">
            <img src={R_eact} alt="react" className="skill-logo" />
            <h3 className="skill-name">React JS</h3>
          </div>

          <div className="skill-card">
            <img src={H_ooks} alt="hooks" className="skill-logo" />
            <h3 className="skill-name">React Hooks</h3>
          </div>

          <div className="skill-card">
            <img src={R_edux} alt="redux" className="skill-logo" />
            <h3 className="skill-name">Redux Toolkit</h3>
          </div>

          <div className="skill-card">
            <img src={R_outer} alt="router" className="skill-logo" />
            <h3 className="skill-name">React Router</h3>
          </div>

          <div className="skill-card">
            <img src={F_awesome} alt="fa" className="skill-logo" />
            <h3 className="skill-name">Font Awesome</h3>
          </div>

          <div className="skill-card">
            <img src={N_pm} alt="vite" className="skill-logo" />
            <h3 className="skill-name">npm</h3>
          </div>

          <div className="skill-card">
            <img src={V_ite} alt="vite" className="skill-logo" />
            <h3 className="skill-name">Vite</h3>
          </div>

          <div className="skill-card">
            <img src={L_ottie} alt="lottie" className="skill-logo" />
            <h3 className="skill-name">React Lottie</h3>
          </div>

          <div className="skill-card">
            <img src={F_ramer} alt="framer" className="skill-logo" />
            <h3 className="skill-name">Framer Motion</h3>
          </div>

          <div className="skill-card">
            <img src={G_it} alt="git" className="skill-logo" />
            <h3 className="skill-name">Git</h3>
          </div>

          <div className="skill-card">
            <img src={G_ithub} alt="github" className="skill-logo" />
            <h3 className="skill-name">Git Hub</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
