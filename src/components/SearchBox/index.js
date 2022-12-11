import React from 'react';
import "./index.css";

function SearchBox({ searchChangeHandler }) {
    return (
        <div className="search-box">
            <form className="search-box__form">
                <label className="search-box__form-label">
                    Search movie by title:
                    <input
                        type="text"
                        className="search-box__form-input"
                        placeholder="For example, Shawshank Redemption"
                        onChange={searchChangeHandler}
                    />
                </label>
            </form>
        </div>
    )
}

export default SearchBox;