import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import News from '../components/News'
import Create from '../components/Create'
import About from '../components/About'
import NewsCrud from './NewsCrud'

class Content extends Component {
    render() {
        return (
            <main className="Content">
                <Switch>
                    <Route path="/news">
                        <News />
                    </Route>
                    <Route path="/create">
                        <Create />
                    </Route>
                    <Route path="/about">
                        <NewsCrud />
                    </Route>
                </Switch>
            </main>
        )
    }
}

export default Content