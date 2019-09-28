import React from 'react';
import './App.css';

import TopBar from './TopBar.js'
import Cart from './Cart.js'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <TopBar />
        <Cart />
      </div>
    );
  }
}

export default App;
