import {ADD_TO_LIST, REMOVE_FROM_LIST, CLEAR_LIST } from "./types/listTypes";

export const addToList = (data) => {
    return {
        type: ADD_TO_LIST,
        payload: data
    }
}

export const removeFromList = (data) => {
    return {
        type: REMOVE_FROM_LIST,
        payload: data
    }
}

export const clearMovies = () => {
    return {
        type: CLEAR_LIST
    }
}