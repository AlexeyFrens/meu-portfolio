import React from 'react';

import './RoundedBadge.css'

const RoundedBadge = ({text}) => {

    const normalizeText = (text) => {
        if (text === null || text === undefined) {
            return "";
        }
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
    }

    const verifyText = () => {
        const formatedText = normalizeText(text);

        if(
            formatedText === 'aprendendo' ||
            formatedText === 'confortavel' ||
            formatedText === 'familiar'
        ){
            return formatedText;
        }else {
            return 'default';
        }
    }

    return (
        <p className={`badge-text ${verifyText()}`}>{text}</p>
    );
};

export default RoundedBadge;