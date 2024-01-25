import axios from "axios";
import { FETCH_FILMS_LIST } from "./../../../redux/types/action-types";
import { fetchFilmList } from "./../api/film.api";
import { errorTrue } from "./../../../redux/actions/APIerrorsActions";

export const fetchFilmsList = (films) => {
  return {
    type: FETCH_FILMS_LIST,
    payload: films,
  };
};

export const fetchFilms = () => {
  return async (dispatch) => {
    try {
      const response = await fetchFilmList();
      if (response.data.items) {
        const films = response.data.items;
        dispatch(fetchFilmsList(films));
        // loading setState - true
        //
      }
    } catch (error) {
      const errorMsg = error.message;
      dispatch(errorTrue(errorMsg));
      console.log("ERROR:", errorMsg);
    } finally {
      // loading setState - false
    }
  };
};
