import React from 'react';
import FunctionalApp from './FunctionalApp.js';

class App extends React.Component {
  render() {
    return(
      <div>
        <input
          ref='name'
          type="text"/>
        <input
          ref='email'
          type="email"/>
        <button onClick={this.onClick}>Check the values</button>
        <FunctionalApp name="John" age={21}/>
    </div>
    )
  }
  onClick = () => {
    console.log("Name:", this.refs.name.value);
    console.log("Email:", this.refs.email.value);
  }
}

export default App;
