import axios from "axios"
import { FETCH_FILMS_LIST } from "../types/action-types"
import { errorTrue } from "./APIerrorsActions"

export const fetchFilmsList = (films) => {
    return {
        type: FETCH_FILMS_LIST,
        payload: films
    }
}

export const fetchFilms = () => {
    return (dispatch) => {
          axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=JANUARY',{
          method:"GET",
          headers:{"X-API-KEY": "756378f6-32f3-4f6c-9090-8e0001c5a203", 'Content-Type': 'application/json'},
          })
        .then(response => {
            const films = response.data.items
            dispatch(fetchFilmsList(films))
        })
        .catch(error=>{
            const errorMsg = error.message
            dispatch(errorTrue(errorMsg))
            console.log("ERROR:", errorMsg);
        })
    }
}
