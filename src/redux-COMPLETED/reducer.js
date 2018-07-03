import { ADD_ITEM } from './actions'

let initialState = ['Coconut Milk']

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let newItem = action.payload
      return [...state, newItem]
    default:
      return state
  }
}
