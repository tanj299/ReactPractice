import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithHandle author={tweet.author}/><Time timestamp={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}

let testTweet = {
  message: "Something about cats", 
  gravatar: "79ef2d0176b87a72b50f1359a7db4664",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 5,
  retweets: 2, 
  timestamp: "2021-03-28 21:24:37"
};

function Avatar({ hash }) {
  let url = `https://www.gravatar.com/avatar/${hash}`
  return (
    <img src={url} 
    className="avatar" 
    alt="avatar"/>
  );
}

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

function NameWithHandle(props) {
  const { name, handle } = props.author;

  return (
    <span className="name-with-handle">
      <span className="name"> {name} </span>
      <span className="handle"> @{handle} </span>
    </span>
  );
}



/**
 * Arrow functions; if only one expression, then we can write it without braces
 * and when it's written WITHOUT braces, then the single expression is implicitly returned
 * 
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


const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time"> 
      {timeString} 
    </span>
  );
}

const ReplyButton = () => {
  return (
    <i className="fa fa-reply reply-button"/>
  );
}

const RetweetButton = ({ count }) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet"/>
      {getRetweetCount(count)}
    </span>
  );
}

const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart"/>
      {count > 0 && 
        <span className="like-count">
          {count}
        </span>}
    </span>
  );
}

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

const getRetweetCount = (count) => {
  if (count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  } else {
    return null;
  }
}

ReactDOM.render(<Tweet tweet={testTweet}/>,
  document.querySelector('#root'));