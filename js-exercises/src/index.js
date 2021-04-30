import React from 'react';
import ReactDOM from 'react-dom';

function MyThingWithJSX() {
  return (
    <div>
      <div className='book'>
        <div className='title'>
          The Title
        </div>
        <div className='author'>
          The Author
        </div>
        <ul className='stats'>
          <li className='rating'>
            5 stars
          </li>
          <li className='isbn'>
            12-345678-910
          </li>
        </ul>
      </div>
    </div>
  );
}

function MyThingWithJavaScript() {
  return (
    React.createElement('div', {},
      React.createElement('div', {}, 'The Title'), 
      React.createElement('div', {}, 'The Author'),
      React.createElement('ul', {},
        React.createElement('li', {}, '5 stars'),
        React.createElement('li', {}, '12-345678-910'),
        React.createElement('li', {}, 'Another one')
      )
    )
  );
}

function Greetings() {
  // let username = 'root';
  // let username = undefined;
  // let username = null;
  let username = false;

  return (
    <div>
      {username == null || undefined ? 'Not logged in' : 'Hello, username'}
    </div>
  );
}

ReactDOM.render(<Greetings/>, document.getElementById('root'));