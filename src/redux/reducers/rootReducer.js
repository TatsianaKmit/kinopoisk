import { combineReducers } from "redux";
import filmsListReducer from "../../modules/film/model/filmsListReducer";
import selectedFilmReducer from "./../../modules/film/model/selectedFilmReducer";
import APIerrorsReducer from "./APIerrorsReducer";

const rootReducer = combineReducers({
  filmsList: filmsListReducer,
  selectedFilm: selectedFilmReducer,
  APIerror: APIerrorsReducer,
});

export default rootReducer;
