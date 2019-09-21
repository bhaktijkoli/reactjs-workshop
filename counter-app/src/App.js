import React from 'react';

class App extends React.Component {
  state = {
    counter: 0,
  }
  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleIncrement}>
          Increment +
        </button>
        <button onClick={this.handleDecrement}>
          Decrement -
        </button>
      </div>
    );
  }
  handleIncrement = () => {
    this.setState({counter: this.state.counter+1})
  }
  handleDecrement = () => {
    this.setState({counter: this.state.counter-1})
  }
}

export default App;
