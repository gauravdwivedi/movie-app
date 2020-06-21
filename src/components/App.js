import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";

class App extends React.Component {

  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      console.log("Updated");

      //we should not use this method to update bcz this is forcefully update the app component
      this.forceUpdate();
    });
    //make api call
    //dispatch action

    // store.dispatch({
    //   type: 'ADD_MOVIES',
    //   movies: data,
    // });


    store.dispatch(addMovies(data));

    console.log("STATE", this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);
    if (index === -1) {
      //found the movie
      return true
    }

    return false;
  }


  onChangeTab = (val) => {

    this.props.store.dispatch(setShowFavourites(val))

  }




  render() {

    const { movies, search } = this.props.store.getState(); //{movies:{},search:{}}
    const { list, favourites, showFavourite } = movies;

    const displayMovies = showFavourite ? favourites : list;

    console.log('Render', this.props.store.getState())



    return (
      <div className="App">
        < Navbar dispatch={this.props.store.dispatch} search={search} />
        <div className="main" >
          <div className="tabs" >
            < div className={` tab ${showFavourite ? '' : 'active-tab'}`} onClick={() => this.onChangeTab(false)} > Movies </div>
            <div className={` tab ${showFavourite ? 'active-tab' : ' '}`} onClick={() => this.onChangeTab(true)}> Favourites </div>
          </div >

          <div className="list" >

            {displayMovies.map((movie, index) => (<MovieCard movie={movie
            }
              key={
                `movies-${index}`
              }

              dispatch={this.props.store.dispatch}

              isFav={this.isMovieFavourite(movie)}
            />
            ))
            }
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No movies</div> : null}
        </div>
      </div>
    );
  }
}

export default App;