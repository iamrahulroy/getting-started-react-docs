import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IntroducingJSXTopic from './IntroducingJSXTopic'

function IntroducingJSXTopics({ match }) {
  return (
    <div>
      <hr />
      <ul>
        <li>
          <Link to={`${match.url}/embedding`}>Embedding Expressions in JSX</Link>
        </li>
        <li>
          <Link to={`${match.url}/expression`}>JSX is an Expression Too</Link>
        </li>
        <li>
          <Link to={`${match.url}/attributes`}>JSX Attributes</Link>
        </li>
        <li>
          <Link to={`${match.url}/jsx-represents-objects`}>JSX Represents Objects</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={IntroducingJSXTopic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic</h3>}
      />
    </div>
  )
}

export default IntroducingJSXTopics
