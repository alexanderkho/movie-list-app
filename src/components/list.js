import React from 'react';
import ListItem from './listItem.js'

var List = function (props) {
    return (<ul>{props.movies.map((movie) => <ListItem movie={movie} />)}</ul>)
}

export default List;