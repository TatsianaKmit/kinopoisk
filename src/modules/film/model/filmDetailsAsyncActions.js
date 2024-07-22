import { fetchDetails } from "../api/film.api";
import {
  REMOVE_SELECTED_FILM,
  FETCH_FILM_DETAILS_REQUEST,
  FETCH_FILM_DETAILS_SUCCESS,
  FETCH_FILM_DETAILS_FAILURE
} from "./../../../redux/types/action-types";

export const removeSelectedFilm = () => {
  return {
    type: REMOVE_SELECTED_FILM,
  };
};


const fetchFilmDetailsRequest = () => {
  return {
    type: FETCH_FILM_DETAILS_REQUEST
  }
}

const fetchFilmDetailsSuccess = film => {
  return {
    type: FETCH_FILM_DETAILS_SUCCESS,
    payload: film
  }
}

const fetchFilmDetailsFailure = error => {
  return {
    type: FETCH_FILM_DETAILS_FAILURE,
    payload: error
  }
}

export const fetchFilmDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchFilmDetailsRequest())
      const response = await fetchDetails(id);
      if (response.data) {
        const film = response.data;
        dispatch(fetchFilmDetailsSuccess(film));
      }
    } catch (error) {
      const errorMsg = error.message;
      dispatch(fetchFilmDetailsFailure(errorMsg))
      console.log("ERROR:", errorMsg);
    }
  };
};
