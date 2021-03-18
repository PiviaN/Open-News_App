import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'

import Content from './Routes/Content'
import Menu from './templates/Menu'
import Footer from './templates/Footer'

const app = _ =>
  <>
    <Router>
      <Menu />
      <Content />
      <Footer />
    </Router>
  </>

export default app