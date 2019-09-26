import React from 'react';
import axios from 'axios';

import MovieItem from './MovieItem';

class Home extends React.Component {
  state = {
    input: '',
    movies: [],
  }
  render() {
    return(
      <div className="app">
        <div className="search-container">
          <input
            type="text"
            value={this.state.input}
            onChange={(e)=>{this.setState({input:e.target.value})}}
            onKeyUp={this.onKeyUp}
            />
          <i className="fa fa-search" />
        </div>
        <div className="movies-list">
          {
            this.state.movies.map((movie, pos) => {
              return(
                <MovieItem movie={movie} key={pos}/>
              )
            })
          }
        </div>
      </div>
    )
  }
  onKeyUp = (e) => {
    if(e.key == "Enter") {
      let API_KEY = "5a34e3f2";
      let url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.input}`;
      axios.get(url)
      .then((res) => {
        if(res.data.Search) {
          this.setState({movies: res.data.Search});
        }
      })
      .catch((err) => {
        console.error(err);
      })
    }
  }
}

export default Home;
