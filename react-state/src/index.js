import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CountingParent extends React.Component {
  state = {
    actionCount: 0
  }
  
  handleAction = (action) => {
    console.log('Child says', action); 

    // actionCount is incremented, and the new count replaces the existing one
    this.setState({
      actionCount: this.state.actionCount + 1
    });
  }

  reset = (action) => {
    console.log('Resetting count to 0')

    this.setState({
      actionCount: 0
    })
  }

  render() {
    return (
      <div>
        <Child onAction={this.handleAction}/>
        <ResetButton onAction={this.reset}/>
        <p> Clicked {this.state.actionCount} times </p>
      </div>
    );
  }
}

/**
 * Controlled Input
 * States are managed and must be kept track of 
 */

// Modifying state with user input 
class ControlledInput extends React.Component {
  state = {
    text: ''
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <input type="text" value={this.state.text} onChange={this.handleChange}/>
    )
  }
}

// Not allowing state to be modified 
class TrickInput extends React.Component {
  state = {
    text: 'try typing something'
  }

  handleChange = (event) => {
    this.setState({
      text: 'haha nope'
    })
  }

  render() {
    return (
      <input type="text" value={this.state.text} onChange={this.handleChange}/>
    )
  }
}

// Not allowing user input to include numbers 
class NoNumbersInput extends React.Component {
  state = {
    text: ''
  }

  handleChange = (event) => {
    // Value from user input 
    let text = event.target.value;
    text = text.replace(/[0-9]/g, '');
    this.setState({ 
      text // Shorthand for 'text: text'
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.handleChange}/>
      </div>
    );
  }
}

/**
 * Uncontrolled Input
 * Component manages its own state without a prop
 * Difficult to extract value though
 */
const EasyInput = () => (
  <input type="text"/>
)

const Child = ({ onAction }) => {
  return (
    <button onClick={onAction}> 
      Click Me! 
    </button>
  );
}

const ResetButton = ({ onAction }) => {
  return(
    <button onClick={onAction}>
      Reset
    </button>
  );
}

// Test to show that each CountingParent component has its own state
const Page = () => {
  return(
    <div>
      <CountingParent/>
      <CountingParent/>
      <CountingParent/>
    </div>
  );
}

ReactDOM.render(<NoNumbersInput/>, 
  document.querySelector('#root')); 

