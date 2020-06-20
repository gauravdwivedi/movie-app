
import { ADD_MOVIES, ADD_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from '../actions/index';
const initialMovieState = {

  list: [],
  favourites: [],
  showFavourite: false

}

export default function movies(state = initialMovieState, action) {
  // if (action.type === ADD_MOVIES) {
  //   return {
  //     ...state,
  //     list: action.movies
  //   }
  // }
  //return state;


  switch (action.type) {
    case ADD_MOVIES:

      return {
        ...state,
        list: action.movies
      }


    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites]

      }

    case REMOVE_FROM_FAVOURITES:

      const filteredArray = state.favourites.filter(
        movie => movie.Tilte !== action.movie.Tilte
      )
      return {
        ...state,
        favourites: filteredArray

      }

    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourite: action.val
      }


    default:
      return state;
  }

}


// const ADD_MOVIES = 'ADD_MOVIES';