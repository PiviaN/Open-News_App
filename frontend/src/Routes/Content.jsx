import React from 'react'
import { Switch, Route,  } from 'react-router-dom'

import NewsData from '../components/NewsData'
import CreateData from '../containers/CreateData'

const Content = _ => (
    <main>
        <Switch>   
            <Route path="/create">
                <CreateData />
            </Route>
            <Route path="/">
                <NewsData />
            </Route>
        </Switch>
    </main>


)

export default Content