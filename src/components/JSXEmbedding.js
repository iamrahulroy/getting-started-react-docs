import React from 'react'

function JSXEmbedding() {
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'John',
    lastName: 'Doe'
  };


  return (
    <div>
      <h1>JSX Expressions in JSX</h1>
      <p>
        Curly braces can hold any valid js expression.
      </p>

      <h3>Hello, {formatName(user)}</h3>
    </div>
  )
}

export default JSXEmbedding
