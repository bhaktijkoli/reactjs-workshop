import React from 'react';
import { Provider } from 'react-redux';
import ToDo from './ToDo.js';

import store from './store.js';

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <ToDo />
      </Provider>
    )
  }
}

export default App;
