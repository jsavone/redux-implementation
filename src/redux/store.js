//import createStore, Reducer
import { createStore, combineReducers } from 'redux'
import reducer from './reducer' //import reducer file

const rootReducer = combineReducers({
  names: reducer //this is an object passing aliases that takes keys and values..
    //names how we will refer to the result, however Reducer is the action function.
})

//export createstore and teStore
export default () => createStore(rootReducer)
