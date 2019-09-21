import React from 'react';

class App extends React.Component {
  render() {
    let name = "Bhaktij";
    let h1Style = {
      color: 'red',
      fontSize: 72,
    }
    // let result = function() {
    //   return 70;
    // }
    return(
      <h1
      style={{
        color: 'white',
        fontSize: 72,
      }}>
      Marks: {this.result(12)}
      </h1>
    )
  }
  result(marks) {
    if(marks > 32) {
      return <small style={{color:'green'}}>{marks}</small>;
    } else {
      return <small style={{color:'red'}}>{marks}</small>;
    }
  }
}

export default App;
