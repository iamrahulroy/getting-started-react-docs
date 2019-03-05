import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import JSXEmbedding from './JSXEmbedding'
import JSXExpression from './JSXExpression'

function IntroducingJSXTopic({ match }) {
  if (match.params.topicId === 'embedding') {
    return <JSXEmbedding />
  } else if (match.params.topicId === 'expression') {
    return <JSXExpression />
  }
}

export default IntroducingJSXTopic
