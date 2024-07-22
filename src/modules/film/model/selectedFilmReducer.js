import {
  REMOVE_SELECTED_FILM,
  FETCH_FILM_DETAILS_REQUEST,
  FETCH_FILM_DETAILS_SUCCESS,
  FETCH_FILM_DETAILS_FAILURE
} from "./../../../redux/types/action-types";

const initialState = {
  loading: false,
  films: [],
  error: ''
};

const selectedFilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILM_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_FILM_DETAILS_SUCCESS:
      return {
        loading: false,
        films: action.payload,
        error: ''
      }

    case FETCH_FILM_DETAILS_FAILURE:
      return {
        loading: false,
        films: [],
        error: action.payload
      }

    case REMOVE_SELECTED_FILM:
      return {};

    default:
      return state;
  }
};

export default selectedFilmReducer;
