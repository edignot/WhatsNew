import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
    return (
        <form className="search">
            <input className="search-input" type="text"></input>
            <button className="search-button">SEARCH</button>
        </form>
    )
}

export default SearchForm;