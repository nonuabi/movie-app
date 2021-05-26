// {
// type : 'ADD_MOVIES',
// movies : [m1,m2,m3]
// }
// {
// type : 'DECREASE_COUND',
// }

//action type
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";

//action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavourite(movies) {
  return {
    type: ADD_FAVOURITE,
    movies,
  };
}
