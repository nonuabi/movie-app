import {
  ADD_MOVIES,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITES,
  SET_SHOW_FAVOURITES,
} from "../actions";

// Add movies reducer
const initalMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};
export function movies(state = initalMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourites: [action.movies, ...state.favourites],
      };
    case REMOVE_FROM_FAVOURITES:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movies.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };
    default:
      return state;
  }
}

//Search reducer
const initalSearchState = {
  result: {},
};
export function search(state = initalSearchState, action) {
  return state;
}

//root reducer
const initialRootState = {
  movies: initalMoviesState,
  search: initalSearchState,
};

export default function rootReducer(state = initialRootState, action) {
  return {
    movies: movies(state.movies, action),
    search: search(state.search, action),
  };
}
