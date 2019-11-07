import React from 'react';

var SearchItem = function (props) {
    return (<li className="search-result">{props.movie.title}</li>)
}

export default SearchItem;