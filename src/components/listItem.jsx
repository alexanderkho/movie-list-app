import React from 'react';

// var ListItem = function (props) {
//     return (<li className="main-list">{props.movie.title}<button onClick={()=>{props.watchListAdd(props.movie)}}>Watched</button></li>)
// }

var ListItem = function (props) {
    return (<li className="main-list">{props.movie.title}
        {props.currentView === 'toWatch' ? (
            <button onClick={() => { props.watchListAdd(props.movie) }}>Add to Watched List</button>
        ) : (
            <button onClick={() => { props.watchListRemove(props.movie) }}>Add to To-Watch List</button>
        )
        } </li>)

}

export default ListItem;