import React from 'react';
import CartItem from './CartItem.js';

import firebase from 'firebase';

class Cart extends React.Component {
  state = {
    cart: [],
  }
  componentDidMount() {
    firebase
    .firestore()
    .collection('items')
    .onSnapshot((result) => {
      console.log(result);
      let docs = result.docs;
      let items = docs.map((doc, pos) => {
        let data = doc.data();
        data.id = doc.id;
        return data;
      });
      this.setState({cart:items});
    })
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
  updateItem = (item, newCount) => {
    let doc = firebase.firestore().collection('items').doc(item.id)
    if(newCount == 0) {
      doc.delete();
    } else {
      doc.update({count: newCount});
    }
  }
}

export default Cart;
