import { configureStore } from "@reduxjs/toolkit";
import filmsListReducer from '../modules/film/model/filmsListSlice'
import selectedFilmReducer from '../modules/film/model/filmsDetailsSlice'

const store = configureStore({
    reducer: {
        filmsList: filmsListReducer,
        selectedFilm: selectedFilmReducer
    },
});

export default store