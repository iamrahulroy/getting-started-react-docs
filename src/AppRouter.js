import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Hello from './components/Hello'
import IntroducingJSXTopics from './components/IntroducingJSXTopics'


function AppRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/Hello">Hello World!</Link></li>
          <li><Link to="/IntroducingJSXTopics">IntroducingJSXTopics </Link></li>
        </ul>

        <Route path="/Hello" exact component={Hello} />
        <Route path="/IntroducingJSXTopics" component={IntroducingJSXTopics} />
      </div>
    </Router>
  )
}

export default AppRouter
