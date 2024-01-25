import axios from "axios";
import { errorTrue } from "../../../redux/actions/APIerrorsActions";
import { fetchDetails } from "../api/film.api";
import {
  SELECTED_FILM,
  REMOVE_SELECTED_FILM,
} from "./../../../redux/types/action-types";

export const selectedFilm = (film) => {
  return {
    type: SELECTED_FILM,
    payload: film,
  };
};

export const removeSelectedFilm = () => {
  return {
    type: REMOVE_SELECTED_FILM,
  };
};

export const fetchFilmDetails = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetchDetails(id);
      if (response.data) {
        const film = response.data;
        dispatch(selectedFilm(film));
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
