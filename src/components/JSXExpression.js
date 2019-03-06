import React from 'react'

function JSXExpression() {
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = undefined;

  if (user) {
    return (
      <div>
        <h1>JSX is an expression too!</h1>
        <h3>Hello, {formatName(user)}</h3>
      </div>
    );
  }
  return (<h1>Hello, Stranger.</h1>);
}

export default JSXExpression
