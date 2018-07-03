import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import provider, createStore and the rootReducer
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//assign store to variable with createStore() method

ReactDOM.render(
  //wrap root lement into the service provider component
  <App />, document.getElementById('root')

);
registerServiceWorker();
