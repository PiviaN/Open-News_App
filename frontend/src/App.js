import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'

import Content from './containers/Content'
import Menu from './templates/Menu'
import Footer from './templates/Footer'

export default props =>
  <div className="App">
    <Router>
      <Menu />
      <Content />
      <Footer />
    </Router>
  </div>