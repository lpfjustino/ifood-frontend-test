import React from 'react';
import Filter from '../containers/filter';
import Login from '../containers/Login';
import { Provider } from "react-redux";
import store from "../store";

class App extends React.Component {

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
