import React from 'react';

import "./ContactBlock.css"

const ContactBlock = ({config}) => {

    return (
        <div className="contact-block">
            <figure>
                <img src={config.icon} alt={config.alt}/>
            </figure>

            <div className="contact-content">
                <h3>{config.title}</h3>

                {config.isDefault ? (
                    <p>{config.content}</p>
                ) : (
                    <a href={config.isEmail ? `mailto:${config.content}` : config.link} target={"_blank"}>{config.content}</a>
                )}
            </div>
        </div>
    );
};

export default ContactBlock;