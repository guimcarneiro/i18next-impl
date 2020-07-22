import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import { MainRoutes } from './routes';
import { MainLayout } from './layout';

function App() {

    return (
        <div>
            <MainLayout>
                <Switch>
                    <MainRoutes />
                </Switch>
            </MainLayout>
        </div>
    );
}

export default App;
