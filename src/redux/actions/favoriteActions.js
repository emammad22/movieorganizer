import { ADD_TO_FAVORITES } from "./types/favoriteTypes";

const addToFavorites = (data) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: data
    }
}

export default addToFavorites;