import { FETCH_FILMS_LIST_REQUEST, FETCH_FILMS_LIST_SUCCESS, FETCH_FILMS_LIST_FAILURE } from "./../../../redux/types/action-types";
import { fetchFilmList } from "./../api/film.api";

const fetchFilmsListRequest = () => {
  return {
    type: FETCH_FILMS_LIST_REQUEST
  }
}

const fetchFilmsListSuccess = films => {
  return {
    type: FETCH_FILMS_LIST_SUCCESS,
    payload: films
  }
}

const fetchFilmsListFailure = error => {
  return {
    type: FETCH_FILMS_LIST_FAILURE,
    payload: error
  }
}

export const fetchFilms = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchFilmsListRequest())
      const response = await fetchFilmList();
      if (response.data.items) {
        const films = response.data.items;
        dispatch(fetchFilmsListSuccess(films));
      }
    } catch (error) {
      const errorMsg = error.message;
      dispatch(fetchFilmsListFailure(errorMsg))
      console.log("ERROR:", errorMsg);
    }
  };
};
