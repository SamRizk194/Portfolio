import "./Skills.css";
import Lottie from "react-lottie";
import animationData1 from "../../../src/animation/arrow.json";

import H_tml from "../../assets/html.png";
import C_ss from "../../assets/css.png";
import J_s from "../../assets/js.png";
import T_sc from "../../assets/tsc.png";
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

const skills = [
  { name: "HTML", img: H_tml },
  { name: "CSS", img: C_ss },
  { name: "Bootstrap", img: B_ootstrap },
  { name: "Tailwind", img: T_ailwind },
  { name: "JavaScript", img: J_s },
  { name: "TypeScript", img: T_sc },
  { name: "React JS", img: R_eact },
  { name: "React Hooks", img: H_ooks },
  { name: "Redux Toolkit", img: R_edux },
  { name: "React Router", img: R_outer },
  { name: "Font Awesome", img: F_awesome },
  { name: "npm", img: N_pm },
  { name: "Vite", img: V_ite },
  { name: "React Lottie", img: L_ottie },
  { name: "Framer Motion", img: F_ramer },
  { name: "Git", img: G_it },
  { name: "Git Hub", img: G_ithub },
];

function Skills() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
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
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <img src={skill.img} alt={skill.name} className="skill-logo" />
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
