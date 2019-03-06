import React from 'react'

function JSXRepresentsObjects() {
  return(
    <div>
      <p>
        <h3>The code below</h3>
        {
          `
            const element = (
                <h1 className="greeting">
                  Hello, world!
                </h1>
            );
          `
        }
        <h3>translates to Following:</h3>
        {
          `
            const element = {
              type: 'h1',
              props: {
                className: 'greeting',
                children: 'Hello, world!'
              }
            }
          `
        }
        <p>These objects are called "React elements"</p>
      </p>
    </div>
  )
}

export default JSXRepresentsObjects
