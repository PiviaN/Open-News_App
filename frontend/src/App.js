import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'

import Content from './containers/Content'
import Menu from './templates/Menu'
import Footer from './templates/Footer'

const app = _ =>
  <div className="App">
    <Router>
      <Menu />
      <Content />
      <Footer />
    </Router>
  </div>

export default app