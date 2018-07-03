import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducer'
import App from './App'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
