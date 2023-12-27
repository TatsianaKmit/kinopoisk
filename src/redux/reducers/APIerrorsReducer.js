import { ERROR_TRUE, ERROR_FALSE } from "../types/action-types"

const initialState = {
    error: null
}

const APIerrorsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ERROR_TRUE:
        return {...state, error: action.text}
  
      case ERROR_FALSE:
        return {...state, error: null}
  
      default:
        return state;
    }
  }

  export default APIerrorsReducer