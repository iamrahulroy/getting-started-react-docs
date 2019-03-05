import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function IntroducingJSXTopic({ match }) {
  return (
    <div>
      <h2>{match.params.topicId}</h2>
    </div>
  )
}

export default IntroducingJSXTopic
