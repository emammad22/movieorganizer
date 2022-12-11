import React from 'react';
import { Link } from "react-router-dom";
import "./index.css";
const watchList = require("../../assets/images/watchlist-icon.png");

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">
                MustSee
            </h1>
                <Link className='link' to={"/list"}>
                <img className='watchlist-icon' src={watchList} alt="watchlist-icon" />
                    <span>Watchlist</span>
                </Link>
        </header>
    )
}

export default Header;