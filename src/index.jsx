import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Test from './Test/Test';

ReactDOM.render(
  <>
    <Test name="Carlos" surname="Martinez" />
    <App />
  </>,
  document.getElementById('root'),
);
