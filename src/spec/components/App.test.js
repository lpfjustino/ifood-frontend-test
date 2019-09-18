import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../javascript/components/App';

it('renders without crashing', async () => {
  const div = document.createElement('div');
  await ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
