import React from 'react';
import { withRouter } from 'react-router-dom';

class MovieItem extends React.Component {
  render() {
    let movie = this.props.movie;
    return(
      <div className="movie" onClick={this.onClick}>
        <img src={movie.Poster}/>
        <h3>{movie.Title}</h3>
      </div>
    )
  }
  onClick = () => {
    let id = this.props.movie.imdbID;
    this.props.history.push('/movie/'+id);
  }
}

export default withRouter(MovieItem);
