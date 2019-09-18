import React from 'react';
import Filter from '../containers/filter';
import { Provider } from "react-redux";
import store from "../store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Filter />
        </div>
      </Provider>
    );
  }
}

export default App;
