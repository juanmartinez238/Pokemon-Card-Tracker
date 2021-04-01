import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './Landing';


function Main() {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing}/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Main;
