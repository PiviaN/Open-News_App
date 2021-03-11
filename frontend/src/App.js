import React from 'react'
import { HashRouter } from 'react-router-dom'

import './App.css'

import Routes from './Routes'
import Content from './containers/Content'

export default props =>

  <div className="App">
    <HashRouter>
      <Routes />
      <Content />
    </HashRouter>
  </div>

