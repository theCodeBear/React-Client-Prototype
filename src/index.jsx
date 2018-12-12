import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import { render } from 'react-dom';
import Home from './components/home/home.jsx';
import Page2 from './components/page2/page2.jsx';
import store from './store';


const appHistory = createHashHistory();

render (
    <Router history={appHistory}>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/page2' exact component={Page2} />
        </Switch>
    </Router>,
    document.getElementById('app')
);


export default appHistory;
export { appHistory };
