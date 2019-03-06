import React from 'react'


function JSXAttributes() {
  const elementStringAttribute = <div tabIndex="0">Element with String Attribute</div>;

  const user = {
    avatarUrl: 'https://www.w3schools.com/w3images/avatar2.png'
  };

  const elementExpressionAttribute = <img src={user.avatarUrl}></img>;

  return (
    <div>
      <h1>JSX Attributes</h1>

      <h3>JSX element attributes with string</h3>
      {elementStringAttribute}

      <h3>JSX element attributes with expression</h3>
      {elementExpressionAttribute}
    </div>
  )
}

export default JSXAttributes
