// import the action
import { ADD_ITEM } from './actions'

//create variable for initial state
let initialState = ['Coconut Milk']

//export state and action. Use switch statement.
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let newItem = action.payload
      return [...state, newItem]
    default:
      return state
  }
}
