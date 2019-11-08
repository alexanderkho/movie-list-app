import React from 'react';

var SearchBar = function (props) {
    return (<form className="search-bar">
        Search for a Moooovie: 
        <input type="text" name="search-input" className="search-input"/>
        <button type="button" onClick={props.searchHandler}>Moo</button>
    </form>)
}

export default SearchBar;