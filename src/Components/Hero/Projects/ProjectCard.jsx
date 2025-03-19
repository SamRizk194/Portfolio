import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Card from "react-bootstrap/Card";

function ProjectCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img width={100} height={100} variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>
          <h2>{props.name}</h2>
        </Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <a href={props.linkOne}>
          <FontAwesomeIcon icon={faLink} style={{ marginRight: "8px" }} />
        </a>
        <a href={props.linkTwo}>
          <FontAwesomeIcon icon={faGithub} style={{ marginRight: "8px" }} />
        </a>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
