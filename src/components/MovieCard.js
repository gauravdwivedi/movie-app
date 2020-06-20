import React from "react";
import { addFavourites } from "../actions";

class MovieCard extends React.Component {

  handleFavClick = () => {

    const { movie } = this.props;

    this.props.dispatch(addFavourites(movie))
  }

  handleUnFavClick = () => {

  }


  render() {
    const { movie, isFav } = this.props;
    console.log(movie.Poster);
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating"> {movie.imdbRating}</div>

            {
              isFav
                ? <button className="favourite-btn" onClick={this.handleFavClick} >Favourite</button>
                : <button className="unfavourite-btn" onClick={this.handleUnFavClick} >Unfavourite</button>
            }


          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
