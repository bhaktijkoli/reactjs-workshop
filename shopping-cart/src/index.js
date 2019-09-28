import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

let firebase = require('firebase');

let firebaseConfig = {
   apiKey: "AIzaSyCfmC-ztkcOatf9vK-1U2KdZtVWP2K9pJA",
   authDomain: "shopping-cart-274ba.firebaseapp.com",
   databaseURL: "https://shopping-cart-274ba.firebaseio.com",
   projectId: "shopping-cart-274ba",
   storageBucket: "",
   messagingSenderId: "350899532644",
   appId: "1:350899532644:web:e352dfdd5946fea5e24071"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
