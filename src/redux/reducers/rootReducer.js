import { combineReducers } from 'redux'
import filmsListReducer from './filmsListReducer'
import selectedFilmReducer from './selectedFilmReducer'
import APIerrorsReducer from './APIerrorsReducer'

const rootReducer = combineReducers ({
    filmsList: filmsListReducer,
    selectedFilm: selectedFilmReducer, 
    APIerror: APIerrorsReducer,
})

export default rootReducer