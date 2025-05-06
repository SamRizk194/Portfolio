import "./Projects.css";
import ProjectCard from "./ProjectCard";
import e_com from "../../../assets/e-com.png";
import foodera from "../../../assets/foodera.png";
import edusity from "../../../assets/edusity.png";
import bondi from "../../../assets/bondi.png";
import Lottie from "react-lottie";
import animationData1 from "../../../animation/arrow.json";
import tailwind from "../../../assets/tailwind.jpg";
import grocify from "../../../assets/grocify.png";

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
            description="An e-commerce site built with React, Vite, and Redux Toolkit, featuring a smooth shopping cart, responsive design, and fast performance."
            linkOne="https://sam-e-commerce.netlify.app/"
            linkTwo="https://github.com/SamRizk194/My-E-Commerce"
          />
          <ProjectCard
            src={foodera}
            name="Foodera"
            description=" A React-based website for exploring food and recipes, built with a responsive design using Bootstrap and React Bootstrap components."
            linkOne="https://samfoodera.netlify.app/"
            linkTwo="https://github.com/SamRizk194/Foodera"
          />
          <ProjectCard
            src={edusity}
            name="Edusity"
            description="A website built with React and Vite, featuring smooth scrolling, Web3 form submissions, and custom styling using CSS and React Hooks for state management."
            linkOne="https://sam-edusity.netlify.app/"
            linkTwo="https://github.com/SamRizk194/Edusity"
          />
          <ProjectCard
            src={bondi}
            name="Bondi"
            description="A responsive website built with HTML, CSS, and Bootstrap, featuring Font Awesome icons for improved design and user experience."
            linkOne="https://bondi-project.netlify.app/"
            linkTwo="https://github.com/SamRizk194/Bondi"
          />

          <ProjectCard
            src={tailwind}
            name="Fylo"
            description="A responsive React + Vite project styled with Tailwind CSS, developed as a training exercise in modern frontend design and responsive design."
            linkOne="https://sam-tailwind.netlify.app/"
            linkTwo="https://github.com/SamRizk194/Tailwind-Practice"
          />

          <ProjectCard
            src={grocify}
            name="Grocify"
            description="A responsive React + Vite project styled with Tailwind CSS, developed as a training exercise in modern frontend design and responsive design."
            linkOne="https://sam-tailwind-page.netlify.app/"
            linkTwo="https://github.com/SamRizk194/Tailwind-Page"
          />
        </div>
      </section>
    </>
  );
}

export default Projects;
