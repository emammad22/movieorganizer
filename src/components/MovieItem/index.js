import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { addToList } from "../../redux/actions/listActions";

function MovieItem(props) {
  const movieList = useSelector(state => state.listReducer);
  const dispatch = useDispatch();

  const saveSelectedMovies = (data) => {
    const titles = [];
    movieList.movies.forEach(movie => titles.push(movie.Title));
    if(titles.includes(data.Title)) return 0;

    dispatch(addToList(data));
  };
  return (
    <>
    {
      props.Poster !== "N/A" && <article className="movie-item">
      <img
        className="movie-item__poster"
        src={`${props.Poster}`}
        alt={props.Title}
      />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {props.Title}&nbsp;({props.Year})
        </h3>
        <button
          onClick={() => saveSelectedMovies(props)}
          type="button"
          className="movie-item__add-button"
        >
          <span className="plus">+</span>WatchList
        </button>
      </div>
    </article>
    }
    </>
  );
}

export default MovieItem;
