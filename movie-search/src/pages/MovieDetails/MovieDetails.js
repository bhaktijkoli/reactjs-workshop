import React from 'react';
import axios from 'axios';

class MovieDetails extends React.Component {
  state = {
    movie: null,
  }
  componentDidMount() {
    let imdbID = this.props.match.params.id;
    console.log(imdbID);
    let API_KEY = "5a34e3f2";
    let url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`;
    axios.get(url)
    .then(res => {
      console.log(res.data);
      this.setState({movie:res.data});
    })
    .catch(err => {
      console.error(err);
    })

  }
  render() {
    let movie = this.state.movie;
    if(movie == null) return <div>Loading</div>;
    return(
      <div className="movie-container">
        <div className="poster">
          <img src={movie.Poster}/>
        </div>
        <div className="movie-details">
          <h1>{movie.Title}</h1>
          <p><span>Released:</span>{movie.Released}</p>
          <p><span>Genre:</span>{movie.Genre}</p>
        </div>
      </div>
    )
  }
}

export default MovieDetails;
