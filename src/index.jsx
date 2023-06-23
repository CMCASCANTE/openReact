import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App';
import Test from './Test/Test';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <Test name="Carlos" surname="Martinez" />
    <App />
  </>,
);

// ReactDOM.render(
//   <>
//     <Test name="Carlos" surname="Martinez" />
//     <App />
//   </>,
//   document.getElementById('root'),
// );
