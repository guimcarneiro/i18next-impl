import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, About } from '../pages';

const MainRoutes = () => {
    return <Switch>
        <Route exact path="/" render={ () => <Home /> } />
        <Route exact path="/about" render={ () => <About /> } />        
    </Switch>
}

export { MainRoutes };