import React from 'react';

import classes from './About.module.css';

import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation(['about']);


    return ( 
        <div className={ classes.root }>
            <h1>{ t('about:title') }</h1>
        <div className={ classes.content }>
            <p>{ t('about:content.paragraph_1') }</p>
            <p>{ t('about:content.paragraph_2') }</p>
            <p>{ t('about:content.paragraph_3') }</p>
        </div>
        </div>
    );
}

export default About;
