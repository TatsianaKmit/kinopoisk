import axios from 'axios'
import {SELECTED_FILM, REMOVE_SELECTED_FILM} from '../types/action-types'
import { errorTrue } from './APIerrorsActions';


export const selectedFilm = (film) => {
    return {
        type: SELECTED_FILM,
        payload: film
    }
}

export const removeSelectedFilm = () => {
    return {
        type: REMOVE_SELECTED_FILM,
           }
}

export const fetchFilmDetails = (id) => {
    return (dispatch) => {
          axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,{
          method:"GET",
          headers:{"X-API-KEY": "756378f6-32f3-4f6c-9090-8e0001c5a203", 'Content-Type': 'application/json'},
          })
        .then(response => {
            const film = response.data
            dispatch(selectedFilm(film))
        })
        .catch(error=>{
            const errorMsg = error.message
           dispatch(errorTrue(errorMsg))
           console.log("ERROR:", errorMsg);
        })
    }
}
