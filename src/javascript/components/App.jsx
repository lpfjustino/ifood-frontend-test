import React, { Component } from 'react';
import Login from '../containers/Login';
import Filter from '../containers/Filter';
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Login />
          <Filter />
        </div>
      </Provider>
    );
  }
}

export default App;
