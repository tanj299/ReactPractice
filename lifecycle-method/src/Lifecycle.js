import React from 'react';

class LifecycleDemo extends React.Component {
    state = {
        counter: 0
    }

    constructor(props) {
        super(props);
        console.log('Constructing...');
        console.log('State already set to: ', this.state);
    }

    componentWillMount() {
        console.log('About to mount...');
    }

    componentDidMount() {
        console.log('Mounted');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Current props: ', this.props);
        console.log('Next props: ', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Deciding to update');
        return true; 
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('About to update...');
    }

    componentDidUpdate() {
        console.log('Updated')
    }

    componentWillUnmount() {
        console.log('Goodbye cruel world');
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div>
                <span>
                    Counter: {this.state.counter}
                </span>
                <br></br>
                <button onClick={this.handleClick}>
                    Click to increment
                </button>
            </div>
        );
    }
}

export default LifecycleDemo;