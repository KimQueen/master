import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './Counter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  ReactDOM.render(<Counter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
