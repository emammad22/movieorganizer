import React, { useState, useEffect } from 'react';
import "./index.css";
import Header from "../../components/Header";
import SearchBox from "../../components/SearchBox";
import Movies from "../../components/Movies";
import Favorites from "../../components/Favorites";

function MainPage() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const api_key = "7fbe6f8";
    let url = `https://www.omdbapi.com/?i=tt3896198&apikey=${api_key}&s=${searchValue}`;
    
    const searchChangeHandler = (e) => {
        setSearchValue(e.target.value);
    }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                data.Response === "True" && setMovies(data.Search.slice(0,9));
            })
            .catch(err => console.log(err));
    }, [url, searchValue]);

    return (
        <div className="main-page">
            <Header />
            <main className="main-page__content">
                <section className="main-page__main-section">
                    <div className="main-page__search-box">
                        <SearchBox 
                        searchValue={searchValue}
                        searchChangeHandler={searchChangeHandler}  />
                    </div>
                    <div className="main-page__movies">
                        <Movies movies={movies} />
                    </div>
                </section>
                <aside className="main-page__favorites">
                    <Favorites movies={movies} />
                </aside>
            </main>
        </div>
    )
}

export default MainPage;