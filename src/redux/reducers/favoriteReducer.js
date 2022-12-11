import { ADD_TO_FAVORITES } from "../actions/types/favoriteTypes";

const INITIAL_STATE = {
    favorites: []
}

const favoriteReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_TO_FAVORITES:
            return {
                ...state, favorites: [...state.favorites, action.payload]
            }
        default: return {
            ...state
        }
    }
}

export default favoriteReducer;