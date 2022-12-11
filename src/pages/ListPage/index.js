import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.css";

function ListPage() {
  const favoriteList = useSelector((state) => state.favoriteReducer);
  return (
    <div className="list-page">
      <h1 className="list-page__title">My lists</h1>

      {favoriteList.favorites.map((item) => {
        return (
          <ul className="list" key={item.listName}>
            <li className="list_title" key={item.listName}>{item.listName}</li>
            {item.movies.movies.map((movie) => {
              const link = `https://www.imdb.com/title/${movie.imdbID}/`
              return (
                <li key={movie.imdbID} className="list_item">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {movie.Title} {movie.Year}
                  </a>
                </li>
              );
            })}
          </ul>
        );
      })}

      <Link className="go_home" to={"/"}>Go to Home</Link>
    </div>
  );
}

export default ListPage;
