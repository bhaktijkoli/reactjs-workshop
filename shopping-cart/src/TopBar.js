import React from 'react';

class TopBar extends React.Component {
  state = {
    input: '',
  }
  render() {
    return(
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
    )
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
}

export default TopBar;
