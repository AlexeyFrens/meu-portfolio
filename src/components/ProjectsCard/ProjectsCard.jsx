import React from 'react';
import RoundedBadge from "../RoundedBadge/RoundedBadge.jsx";

import "./ProjectsCard.css";

const ProjectsCard = ({config}) => {
    return (
        <div className={"project-card"}>

            <figure>
                <img src={config.image} alt={config.alt}/>
            </figure>

            <div className={"project-card-content"}>
                <h2>{config.title}</h2>

                <p className={"project-description"}>{config.description}</p>

                <div className={"project-tags"}>
                    {config.tags.map(tag => (
                        <RoundedBadge key={tag} text={tag}/>
                    ))}
                </div>

                <div className={"project-links"}>
                    <a id={"demo-link"} href={config.demoLink} target={"_blank"}>Demo</a>
                    <a id={"code-link"} href={config.codeLink} target={"_blank"}>Código</a>
                </div>
            </div>

        </div>
    );
};

export default ProjectsCard;