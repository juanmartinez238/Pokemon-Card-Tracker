import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './Landing';
import Browse from './Browse'


function Main() {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route exact path='/browse' component={Browse}/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Main;
