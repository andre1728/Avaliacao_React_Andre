import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Prova from '../prova/Prova';
import About from '../about/About';

export default props => (
    <Router history={hashHistory}>
        <Route path='/prova' component={Prova}/>
        <Route path='/about' component={About}/>
        <Redirect from='*' to='/prova'/>
    </Router>
)