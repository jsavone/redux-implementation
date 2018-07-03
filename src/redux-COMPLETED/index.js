import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'

let newStore = store();

render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
