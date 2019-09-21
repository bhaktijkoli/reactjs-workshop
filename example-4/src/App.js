import React from 'react';

class App extends React.Component {
  state = {
    input: '',
  }
  render() {
    return(
      <div className="container">
        <h1>{this.state.input}</h1>
        <input
          type="text"
          onChange={this.handleChange}
          />
        <button onClick={this.handleClick}>
          Click me
        </button>
      </div>
    )
  }
  handleClick() {
    alert("Button has been clicked");
  }
  handleChange = (event) => {
    let value = event.target.value;
    this.setState({
      input: value
    })
  }
}

export default App;
