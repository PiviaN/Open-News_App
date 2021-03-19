import React from 'react'
import { Switch, Route,  } from 'react-router-dom'

import NewsData from '../components/NewsData'
import CreateData from '../components/CreateData'

const Content = _ => (
        <Switch>   
            <Route path="/create">
                <CreateData />
            </Route>
            <Route path="/">
                <NewsData />
            </Route>
        </Switch>
)

export default Content