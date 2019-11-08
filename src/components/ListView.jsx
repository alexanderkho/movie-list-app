import React from 'react';
import ListItem from './ListItem.jsx'

export var ListView = function (props) {
    return (
        props.currentView === 'toWatch'? (
            //toWatchView
            <div>
                <h3>To-Watch List</h3>
                <ul className="to-watch-view">{props.toWatchMovies.map((movie, i) => <ListItem currentView={props.currentView} movie={movie} key={i} watchListAdd={props.watchListAdd} dropDownHandler={props.dropDownHandler}/>)}</ul>
            </div>
        ) : (
            //watchedView
            <div>
                <h3>Movies You've Watched</h3>
                <ul className="watch-view">{props.watchedMovies.map((movie, i) => <ListItem currentView={props.currentView} movie={movie} key={i} watchListRemove={props.watchListRemove} dropDownHandler={props.dropDownHandler}/>)}</ul>
            </div>
        )
    );
};
