import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import PropTypes from 'prop-types';

/**
 * Function Component
 */

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
        <span>
          <Envelope fromPerson={tweet.testFromAddressLabel} toPerson={tweet.testToAddressLabel}/>
        </span>
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
  timestamp: "2021-03-28 21:24:37",
  testFromAddressLabel: {
    name: "John Smith",
    address: "123 Lullaby St.",
    city: "Boston, MA 02118"
  },
  testToAddressLabel: {
    recipient: "Jane Smith",
    address: "456 Energy Street",
    city: "New York, NY 10011"
  }
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

const Envelope = ({ fromPerson, toPerson }) => {
  return (
    <div>
      <span>
        {fromPerson.name} {fromPerson.address} {fromPerson.city}
      </span>
      <br/>
      <span>
        {toPerson.recipient} {toPerson.address} {toPerson.city}
      </span>
    </div>
  );
} 

/**
 * PropTypes  
 */ 

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
}

Avatar.propTypes = {
  hash: PropTypes.string
}

NameWithHandle.propTypes = {
  author: PropTypes.shape({
    handle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

Time.propTypes = {
  timestamp: PropTypes.string 
}

Message.propTypes = {
  text: PropTypes.string.isRequired
}

LikeButton.propTypes = {
  count: PropTypes.number
}

RetweetButton.propTypes = {
  count: PropTypes.number
}

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
)

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