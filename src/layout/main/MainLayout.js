import React from 'react';
import { useHistory } from 'react-router-dom';

import classes from './MainLayout.module.css';
import { useTranslation } from 'react-i18next';

function MainLayout(props) {
    const history = useHistory();

    const { t, i18n } = useTranslation(['translations','layout']);

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
    }

  return ( 
      <div className={classes.root}>
          <div className={classes.container}>
            <div className={classes.pageWrapper}>
                <div className={ classes.languages }>
                    <button type="button" onClick={ () => changeLanguage('en')}>{ t('translations:en') }</button>
                    <button type="button" onClick={ () => changeLanguage('pt')}>{ t('translations:pt') }</button>
                </div>
                {props.children}
            </div>
            <div className={classes.navbar}>
                <button onClick={ () => history.push("/") } type="button">{ t('layout:navbar.home') }</button>
                <button onClick={ () => history.push("/about") } type="button">{ t('layout:navbar.about') }</button>
            </div>
          </div>
      </div>
   );
}

export default MainLayout;
