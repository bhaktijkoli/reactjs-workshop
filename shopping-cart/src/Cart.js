import React from 'react';

import CartItem from './CartItem.js';

class Cart extends React.Component {
  state = {
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
    return(
      <React.Fragment>
          {items}
      </React.Fragment>
    )
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

export default Cart;
