
const initialMovieState ={
list:[],
favourites:[]

}

export default function movies(state = initialMovieState, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list:action.movies
    }
  }

  return state;
}


const ADD_MOVIES = 'ADD_MOVIES';