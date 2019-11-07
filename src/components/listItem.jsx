import React from 'react';

var ListItem = function (props) {
    return (<li className="main-list">{props.movie.title}<button onClick={props.watchListAdd}>Watched</button></li>)
}

export default ListItem;