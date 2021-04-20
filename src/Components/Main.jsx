import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './Landing';
import Browse from './Browse'
import Finder from './Finder';

function Main() {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route exact path='/browse' component={Browse}/>
                <Route exact path='/finder' component={Finder}/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Main;
