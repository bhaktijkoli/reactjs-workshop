import React from 'react';
import './App.css';

import TopBar from './TopBar.js'
import Cart from './Cart.js'

import firebase from 'firebase';

class App extends React.Component {
  state = {
    user: null,
  }
  componentDidMount() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().onAuthStateChanged(user => {
      if(user == null) {
        this.setState({user: null});
        firebase.auth().signInWithPopup(provider)
        .then(result => {
          let user = result.user;
          this.updateUserState(user);
        })
        .catch(err => {
          console.error(err);
        })
      } else {
        this.updateUserState(user);
      }
    });
  }
  render() {
    if(this.state.user == null) {
      return(
        <div style={{marginTop:150, textAlign:'center'}}>Please login</div>
      )
    }
    return (
      <div className="app">
        <TopBar user={this.state.user}/>
        <Cart />
      </div>
    );
  }
  updateUserState = (user) => {
    let data = {
      name: user.displayName,
      photo: user.photoURL,
      uid: user.uid,
    }
    this.setState({user: data});
  }
}

export default App;
