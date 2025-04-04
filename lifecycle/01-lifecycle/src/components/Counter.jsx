import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor: Initializing Counter component");
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps: Updating state from props in Counter",props, state);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Checking if Counter should update", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: Capturing snapshot before update", prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: Counter component updated", snapshot);
    if (prevState.count !== this.state.count) {
      console.log(`Count changed from ${prevState.count} to ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Cleaning up Counter component");
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log("Render: Rendering Counter component");
    return (
      <div>
        <h2>Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default Counter;
