import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

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

  render() {
    const { list } = this.props.store.getState();

    console.log('Render', this.props.store.getState())

    return (
      <div className="App">
        < Navbar />
        <div className="main" >
          <div className="tabs" >
            < div className="tab" > Movies </div>
            <div className="tab" > Favourites </div>
          </div >

          <div className="list" >
            {list.map((movie, index) => (<MovieCard movie={movie
            }
              key={
                `movies-${index}`
              }
            />
            ))
            } </div>
        </div>
      </div>
    );
  }
}

export default App;