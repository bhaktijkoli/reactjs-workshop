import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "./index.css";
import Home from './pages/Home/Home.js';
import MovieDetails from './pages/MovieDetails/MovieDetails.js';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/movie/:id" exact component={MovieDetails}/>
      </BrowserRouter>
    )
  }
}

export default App;

//1- src/index.css
//2- https://pastebin.com/NX2z0D8z
