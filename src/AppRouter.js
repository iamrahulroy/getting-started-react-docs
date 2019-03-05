import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Hello from './Hello'

function AppRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/Hello">Hello World!</Link></li>
        </ul>

        <Route path="/Hello" exact component={Hello} />
      </div>
    </Router>
  )
}

export default AppRouter
