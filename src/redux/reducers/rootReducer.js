import { combineReducers } from "redux";
import filmsListReducer from "../../modules/film/model/filmsListReducer";
import selectedFilmReducer from "./../../modules/film/model/selectedFilmReducer";

const rootReducer = combineReducers({
  filmsList: filmsListReducer,
  selectedFilm: selectedFilmReducer,
});

export default rootReducer;
