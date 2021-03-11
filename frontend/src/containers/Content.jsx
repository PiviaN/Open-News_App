import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import NewsData from './NewsData'
import CreateData from './CreateData'
import About from '../components/About'


class Content extends Component {
    render() {
        return (
            <main className="Content">
                <Switch>
                    <Route path="/news">
                        <NewsData />
                    </Route>
                    <Route path="/create">
                        <CreateData />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </main>
        )
    }
}

export default Content