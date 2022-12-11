import {ADD_TO_LIST, REMOVE_FROM_LIST, CLEAR_LIST } from "../actions/types/listTypes";

const INITIAL_STATE = {
    movies: []
}

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case ADD_TO_LIST:
          return {
              ...state, movies: [...state.movies, action.payload]
          };
      case REMOVE_FROM_LIST:
          return {
              ...state,
            movies: [...state.movies.filter(movie => movie.Title !== action.payload)]
          };
      case CLEAR_LIST:
          return {
              ...state, movies: []
          };
      default:
          return state;
  }
}

export default listReducer;