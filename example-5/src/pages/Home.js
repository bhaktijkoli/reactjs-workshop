import React from 'react';

class Home extends React.Component {
  render() {
    return(
      <div>
        <h1>Home Page</h1>
        <button onClick={this.onGoTo}>Go to Contact</button>
      </div>
    )
  }
  onGoTo = () => {
    this.props.history.push('/contact');
  }
}

export default Home;
