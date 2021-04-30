import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Tweet() {
  return (
    <div className="tweet">
      <Avatar/>
      <div className="content">
        <NameWithHandle/><Time/>
        <Message/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton/>
          <MoreOptionsButton/>
          
          {/* ReactDOM calls Hello with {name="Dave"} as the props */}
          <Hello name="Dave"/>
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img src="https://www.gravatar.com/avatar/nothing" className="avatar" alt="avatar"/>
  );
}

function Message() {
  return (
    <div className="message">
      This is less than 140 characters.
    </div>
  );
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name"> Your Name </span>
      <span className="handle"> @yourHandle </span>
    </span>
  );
}


// Arrow functions; if only one expression, then we can write it without braces
// and when it's written WITHOUT braces, then the single expression is implicitly returned
/**
 * eg. 
 * const Time = () = (
 *    <span className="time"> 3h ago </span>
 * );
 * 
 * is equivalent to 
 * 
 * const Time = () = {
 *    return (
 *      <span className="time"> 3h ago </span>
 *    );
 * }
 */
const Time = () => (
  <span className="time"> 3h ago </span>
);

const ReplyButton = () => {
  return (
    <i className="fa fa-reply reply-button"/>
  );
}

// Implicity return with single expression 
const RetweetButton = () => <i className="fa fa-reply retweet-button"/>;

const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

function Hello(props) {
  return (
    <span> Hello, {props.name} </span>
  );
}

function handleAction(event) {
  console.log('Child did: ', event);
}

function Parent() {
  return (
    <Child onAction={handleAction}/>
  )
}

function Child({ onAction }) {
  return (
    <button onClick={onAction}/>
  );
}

ReactDOM.render(<Tweet/>,
  document.querySelector('#root'));