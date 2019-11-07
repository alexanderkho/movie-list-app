import React from 'react';
import ListItem from './listItem.jsx'

var List = function (props) {
    return (<ul>{props.movies.map((movie, i) => <ListItem movie={movie} key={i} />)}</ul>)
}

export default List;