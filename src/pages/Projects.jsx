
import React from "react";
import Project from "../components/Project";

import React from "react";

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noreferrer">Deployed App</a>
      <a href={repoLink} target="_blank" rel="noreferrer">GitHub Repo</a>
    </div>
  );
}

export default Project;