import React, { Component } from 'react';
import Login from '../containers/Login';
import Filter from '../containers/Filter';
import FeaturedPlaylists from '../containers/FeaturedPlaylists';
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Filter />
          <Login />
          <FeaturedPlaylists />
        </div>
      </Provider>
    );
  }
}

export default App;
