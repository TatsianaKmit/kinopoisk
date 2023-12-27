import { ERROR_TRUE, ERROR_FALSE } from "../types/action-types";

export function errorTrue(text) {
    return dispatch => {
      dispatch({
        type: ERROR_TRUE,
        payload: text
      });
  
      setTimeout(() => {
        dispatch(errorFalse());
      }, 2000)
    }
  }
  export function errorFalse() {
    return {
      type: ERROR_FALSE,
    }
  }