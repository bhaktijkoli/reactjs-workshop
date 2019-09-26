import React from 'react';
import { withRouter } from 'react-router-dom';

class Article extends React.Component {
  render() {
    console.log(this.props);
    return(
      <h1>Article Page - {this.props.match.params.title}</h1>
    )
  }
}

export default withRouter(Article);
