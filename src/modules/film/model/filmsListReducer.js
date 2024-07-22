import { FETCH_FILMS_LIST_REQUEST, FETCH_FILMS_LIST_SUCCESS, FETCH_FILMS_LIST_FAILURE } from "../../../redux/types/action-types"

const initialState = {
    loading: false,
    films: [],
    error: ''
}

const filmsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILMS_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_FILMS_LIST_SUCCESS:
            return {
                loading: false,
                films: action.payload,
                error: ''
            }

        case FETCH_FILMS_LIST_FAILURE:
            return {
                loading: false,
                films: [],
                error: action.payload
            }

        default:
            return state
    }
}

export default filmsListReducer

