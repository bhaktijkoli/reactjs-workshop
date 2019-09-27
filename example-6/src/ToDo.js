import React from 'react';
import { connect } from 'react-redux';

class ToDo extends React.Component {
  state = {
    input: '',
  }
  render() {
    console.log(this.props.items);
    return(
      <div className="app">
        <input
          type="text"
          value={this.state.input}
          onChange={e=>this.setState({input:e.target.value})}
          />
        <button onClick={this.onAddClick}>Add</button>
        <ul>
          {
            this.props.items.map((item, pos) => {
              return(
                <li key={pos}><h1>{item}</h1></li>
              )
            })
          }
        </ul>
    </div>
    )
  }
  onAddClick = () => {
    let items = this.props.items;
    items.push(this.state.input);
    let action = {
      type:"UPDATE_ITEMS",
      payload: items,
    }
    this.props.dispatch(action);
    this.setState({input: ''});
  }
}

let mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(ToDo);
