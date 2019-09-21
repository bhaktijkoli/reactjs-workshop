import React from 'react';
import Counter from './Counter';

class App extends React.Component {
  constructor() {
    super();
    console.log("App Component is Initialized");
    this.state = {
      fontSize: 14,
      counter: 0,
    }
  }
  componentWillMount() {
    console.log("App will mount");
  }
  componentDidMount() {
    console.log("App did mount");
    setInterval(function () {
      this.setState({
        fontSize:this.state.fontSize+1,
        counter: this.state.counter+1,
      });
    }.bind(this), 1000);
  }
  render() {
    console.log("App is rendering");
    let h1Style = {fontSize:this.state.fontSize}
    return(
      <Counter count={this.state.counter}/>
    )
    // <h1 style={h1Style}>Counter: {this.state.counter}</h1>

  }
}

export default App;
