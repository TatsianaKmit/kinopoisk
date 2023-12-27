import {FETCH_FILMS_LIST} from "../types/action-types"

const initialState = {
        films: [],
}

const filmsListReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_FILMS_LIST:
        return {films: action.payload}
        
        default:
        return state
    }
}

export default filmsListReducer

