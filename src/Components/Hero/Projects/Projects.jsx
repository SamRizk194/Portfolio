import "./Projects.css";
import ProjectCard from "./ProjectCard";
import e_com from "../../../assets/e-com.png";
import foodera from "../../../assets/foodera.png";
import edusity from "../../../assets/edusity.png";
import bondi from "../../../assets/bondi.png";
import Lottie from "react-lottie";
import animationData1 from "../../../animation/arrow.json";

function Projects() {
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
      <section id="projects" className="container">
        <h1 className="sectionTitle">Projects</h1>
        <div className="projectsContainer">
          <ProjectCard
            src={e_com}
            name="E-Commerce"
            description="This is the first project. It includes features like X, Y, and Z."
            linkOne="https://sam-e-commerce.netlify.app/"
            linkTwo="https://github.com/SamRizk194/My-E-Commerce"
          />
          <ProjectCard
            src={foodera}
            name="Foodera"
            description="This is the second project. It's a cool project with features A, B, and C."
            linkOne="https://samfoodera.netlify.app/"
            linkTwo="https://github.com/SamRizk194/Foodera"
          />
          <ProjectCard
            src={edusity}
            name="Edusity"
            description="This is the third project. It offers amazing features such as P, Q, and R."
            linkOne="https://sam-edusity.netlify.app/"
            linkTwo="https://github.com/SamRizk194/Edusity"
          />
          <ProjectCard
            src={bondi}
            name="Bondi"
            description="This is the fourth project. It has functionalities like M, N, and O."
            linkOne="https://bondi-project.netlify.app/"
            linkTwo="https://github.com/SamRizk194/Bondi"
          />
        </div>
      </section>
    </>
  );
}

export default Projects;
