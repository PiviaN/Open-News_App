import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import News from './components/News'
import Create from './components/Create'
import About from './components/About'

export default props =>
    <Switch>
        <Route exact path="/" component={News} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/about" component={About} />
        <Redirect from='*' to='/' />
    </Switch>