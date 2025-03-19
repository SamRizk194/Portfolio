import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../../../common/ThemeContext";

function ProjectCard(props) {
  const { theme } = useTheme();
  return (
    <div className="project-card">
      <div className="project-card-img-container">
        <img src={props.src} alt={props.name} className="project-card-img" />
      </div>
      <div className="project-card-body">
        <h2 className="project-card-title">{props.name}</h2>
        <p className="project-card-description">{props.description}</p>
        <div className="project-card-links">
          <a href={props.linkOne} className="project-card-link" target="_blank">
            <FontAwesomeIcon
              icon={faLink}
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </a>
          <a href={props.linkTwo} className="project-card-link" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
