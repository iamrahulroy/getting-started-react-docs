import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import JSXEmbedding from './JSXEmbedding'
import JSXExpression from './JSXExpression'
import JSXAttributes from './JSXAttributes'
import JSXRepresentsObjects from './JSXRepresentsObjects'


function IntroducingJSXTopic({ match }) {
  if (match.params.topicId === 'embedding') {
    return <JSXEmbedding />
  } else if (match.params.topicId === 'expression') {
    return <JSXExpression />
  } else if (match.params.topicId === 'attributes') {
    return <JSXAttributes />
  } else if (match.params.topicId === 'jsx-represents-objects') {
    return <JSXRepresentsObjects />
  }
}

export default IntroducingJSXTopic
