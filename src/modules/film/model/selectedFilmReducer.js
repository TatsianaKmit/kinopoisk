import {
  SELECTED_FILM,
  REMOVE_SELECTED_FILM,
} from "./../../../redux/types/action-types";

const initialState = {
  films: [],
};

const selectedFilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_FILM:
      return { ...state, ...action.payload };

    case REMOVE_SELECTED_FILM:
      return {};

    default:
      return state;
  }
};

export default selectedFilmReducer;
