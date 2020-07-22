import React from 'react';

import classes from './Home.module.css';

import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation(['home']);

    return (
        <div className={ classes.root }>
            <h1>{ t('home:title') }</h1>
            <div className={ classes.content }>
                <p>{ t('home:content.paragraph_1') }</p>
                <p>{ t('home:content.paragraph_2') }</p>
                <p>{ t('home:content.paragraph_3') }</p>
            </div>
        </div>
    );
}

export default Home;
