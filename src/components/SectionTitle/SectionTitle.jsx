import React from 'react';

import './SectionTitle.css';

const SectionTitle = ({title}) => {
    return (
        <span className={"section-title-container"}><h2>{title}</h2></span>
    );
};

export default SectionTitle;