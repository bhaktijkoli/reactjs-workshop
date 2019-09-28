import React from 'react';

class CartItem extends React.Component {
  render() {
    let item = this.props.item;
    return(
      <div className="cart-item">
        <div className="cart-item-text">
          {item.name}
        </div>
        <button
          onClick={this.onClickIncrement}
          className="cart-item-button">
          +
        </button>
        <div className="cart-item-count">
          {item.count}
        </div>
        <button
          onClick={this.onClickDecrement}
          className="cart-item-button">
          -
        </button>
      </div>
    )
  }
  onClickIncrement = () => {
    this.props.updateItem(this.props.item, this.props.item.count + 1)
  }
  onClickDecrement = () => {
    this.props.updateItem(this.props.item, this.props.item.count - 1)
  }
}

export default CartItem;
