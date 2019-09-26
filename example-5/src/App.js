import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Article from './pages/Article.js';

import Nav from './Nav.js';
import Footer from './Footer.js';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/article/:title" component={Article}/>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;


/// CMD
// npm install react-router-dom --save
