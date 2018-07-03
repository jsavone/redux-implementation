//import createStore, Reducer
import { createStore, combineReducers } from 'redux'
import namesReducer from './Reducer' //import reducer file

const rootReducer = combineReducers({
  names: Reducer //this is an object passing aliases that takes keys and values..
    //names how we will refer to the result, however Reducer is the action function.
})

//export createstore and teStore
export default () => createStore(rootReducer)
