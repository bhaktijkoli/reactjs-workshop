import React from 'react';

import firebase from 'firebase';

class TopBar extends React.Component {
  state = {
    input: '',
  }
  render() {
    let user = this.props.user;
    return(
      <div className="add-bar">
        <img src={user.photo} className="user-photo"/>
        <div className="user-name">
          {user.name}
        </div>
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
        <button
          className="btn-logout"
          onClick={this.onClickLogout}
          >
          Logout
        </button>
      </div>
    )
  }
  onInputChange = (e) => {
    let value = e.target.value;
    this.setState({input:value});
  }
  onClickAdd = () => {
    let item = {
      name: this.state.input,
      count: 1,
    }
    firebase.firestore().collection('items').add(item);
  }
  onClickLogout = () => {
    firebase.auth().signOut();
    window.location.reload();
  }
}

export default TopBar;
