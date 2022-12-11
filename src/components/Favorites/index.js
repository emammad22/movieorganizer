import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMovies, removeFromList } from "../../redux/actions/listActions"
import addToFavorites from "../../redux/actions/favoriteActions";
import "./index.css";

function Favorites() {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favoriteReducer);
  const movieList = useSelector((state) => state.listReducer);

  const [listName, setListName] = useState("");

  const onChangeHandler = (e) => {
    setListName(e.target.value);
  }

  const addFavoritesToStore = () => {
    const listTitles = [];
    favoriteList.favorites.forEach(item => listTitles.push(item.listName));
    if(listTitles.includes(listName)) return 0;
    if(movieList.movies[0] === undefined) return 0;

    dispatch(addToFavorites({
      listName : listName,
      movies: movieList
    }));

    dispatch(clearMovies());
  }

  const removeMovieFromFavorites = (e) => {
    const removeThis =  e.target.parentElement.firstElementChild.firstElementChild.textContent;
    dispatch(removeFromList(removeThis));
  }

  return (
    <div className="favorites">
      <input onChange={onChangeHandler} placeholder="New List" className="favorites__name" />
      <ul className="favorites__list">
        {
            movieList.movies.map((item) => {
                return (
                  <li key={item.imdbID} className="favorite-item">
                    <p className="favorite-info"><span className="title">{item.Title}</span> - <span className="year">{item.Year}</span></p>
                      <img onClick={removeMovieFromFavorites} className="remove-icon" src={require("../../assets/images/remove-icon.png")} alt="remove-icon" />
                  </li>
                )
              })
        }
      </ul>
      <button onClick={addFavoritesToStore} type="button" className="favorites__save" disabled={!listName}>
        Save List
      </button>
    </div>
  );
}

export default Favorites;
