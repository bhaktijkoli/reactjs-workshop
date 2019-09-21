import React from 'react';

class App extends React.Component {
  state = {
    items: [
      "Item 1",
      "Item 2",
      "Item 3",
    ]
  }
  render() {
    let items = this.state.items.map((item, pos)=>{
      return <li key={pos}>{item}</li>;
    });
    return(
      <ul>
        {items}
      </ul>
    )
  }
}

export default App;
