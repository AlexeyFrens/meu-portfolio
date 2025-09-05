import React from 'react';

import './SkillsCard.css'
import RoundedBadge from "../RoundedBadge/RoundedBadge.jsx";

const SkillsCard = ({config}) => {
    return (
        <div className={"skills-card"}>
            <img src={config.image} alt={config.alt}/>

            <h3>{config.title}</h3>

            <RoundedBadge text={config.text} />
        </div>
    );
};

export default SkillsCard;