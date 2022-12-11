import React, { useEffect, useState } from 'react';
import "./index.css";
import MovieItem from "../MovieItem";

function Movies(props) {
    const [defaultMovies, setDefaultMovies] = useState([]);

    useEffect(() => {
        fetch("https://www.omdbapi.com/?i=tt3896198&apikey=7fbe6f8&s=star wars")
        .then(res => res.json())
        .then(data => setDefaultMovies(data));
    }, [])
    
    return (
        <ul className="movies">
            {
                props.movies[0] !== undefined ? props.movies.map(movie => {
                    return <MovieItem {...movie} key={movie.imdbID} />
                }) : defaultMovies.Search !== undefined && defaultMovies.Search.slice(0, 9).map(movie => {
                    return <MovieItem {...movie} key={movie.imdbID} />
                })
            }
        </ul>
    )
}

export default Movies
