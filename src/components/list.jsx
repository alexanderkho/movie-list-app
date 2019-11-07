import React from 'react';
import ListItem from './ListItem.jsx'

var List = function (props) {
    return (<ul className="main-list">{props.movies.map((movie, i) => <ListItem movie={movie} key={i} watchListAdd={props.watchListAdd}/>)}</ul>)
}

export default List;