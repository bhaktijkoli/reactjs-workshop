import React from 'react';
import './App.css';
import CartItem from './CartItem.js';

class App extends React.Component {
  state = {
    input: '',
    cart: [],
  }
  render() {
    let items = this.state.cart.map((item, pos) => {
      return (
        <CartItem
          item={item}
          updateItem={this.updateItem}
          pos={pos}
          key={pos}/>
      )
    })
    return (
      <div className="app">
        <div className="add-bar">
          <input
            className="input"
            type="text"
            value={this.state.input}
            onChange={this.onInputChange}
            />
          <button
            className="btn"
            onClick={this.onClickAdd}
            >Add</button>
        </div>
        {items}
      </div>
    );
  }
  onInputChange = (e) => {
    let value = e.target.value;
    this.setState({input:value});
  }
  onClickAdd = () => {
    let cart = this.state.cart;
    let item = {
      name: this.state.input,
      count: 1,
    }
    cart.push(item);
    this.setState({cart:cart, input: ''});
  }
  updateItem = (pos, newCount) => {
    let cart = this.state.cart;
    if(newCount == 0) {
      let newCart = [];
      cart.forEach((el, p) => {
        if(p != pos) {
          newCart.push(el);
        }
      });
      cart = newCart;
    } else {
      cart[pos].count = newCount;
    }
    this.setState({cart:cart});
  }
}

export default App;
