const { default: movies } = require("../reducers");

// {
//     type:'ADD_MOVIES',
//     movies
// }


export const ADD_MOVIES = 'ADD_MOVIES';


//action creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}