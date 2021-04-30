/**
 * Jayson Tan
 * React Practice
 * 04/23/21
 */

import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
  return <span>Hello</span>;
}

function World() {
  return <span>World</span>;
}


function HelloWorld() {
  return (
    <div>
      <Hello/> <World/>!
    </div>
  );
}

// JSX only takes expressions, aka, a returned value 
// Cannot takes statements
function SubmitButton() {
  let buttonLabel = "Submit";
  return (
    <button>{buttonLabel}</button>
  );
}

function ValidIndicator() {
  let isValid = true; 
  return (
    <span>{isValid ? 'valid' : 'invalid'}</span>
  );
}

/**
 * ReactDOM: Uses a virtual DOM to create elements and render it in location, takes two arguments:
 * ReactDOM.render([React element], [DOM element])
 * @[React element]: what to render, usually stateless component
 * @[DOM element]: where to render the element 
 */
ReactDOM.render(<HelloWorld/>,
  document.querySelector('#root'));