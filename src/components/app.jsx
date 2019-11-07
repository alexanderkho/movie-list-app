import React from 'react';
import {ListView} from './ListView.jsx';
import SearchBar from './SearchBar.jsx';
import SearchResultView from './SearchResultView.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            watchedMovies: [],
            toWatchMovies: [],
            currentView: 'toWatch',
            movies: [],
            searchResults: [],
            searchHidden: true,
            searchTerm: ''
        }
        //binding all methods
        this.searchHandler = this.searchHandler.bind(this);
        this.searchMovies = this.searchMovies.bind(this);
        this.hideSearchHandler = this.hideSearchHandler.bind(this);
        this.addMovieHandler = this.addMovieHandler.bind(this);
        this.watchViewToggle = this.watchViewToggle.bind(this);
        this.watchListAdd = this.watchListAdd.bind(this);
        this.watchListRemove = this.watchListRemove.bind(this);
    }

    searchHandler (e) {
        this.searchMovies(document.getElementsByClassName('search-input')[0].value);
    }

    searchMovies (str) {
        var currentResults = {}
        currentResults.watched = [];
        currentResults.toWatch = [];
        this.state.watchedMovies.forEach((movie) => {
            if (movie.title.toLowerCase().includes(str.toLowerCase())) {
                currentResults.watched.push(movie);
            }
        });
        this.state.toWatchMovies.forEach((movie) => {
            if (movie.title.toLowerCase().includes(str.toLowerCase())) {
                currentResults.toWatch.push(movie);
            }
        });
        this.setState({
            searchResults: currentResults,
            searchHidden: false,
            searchTerm: str
        });
    }

    hideSearchHandler () {
        this.setState({searchHidden: true});
    }

    addMovieHandler () {
        let newMovie = [{title: document.getElementsByClassName('add-movie')[0].value}];
        this.setState({toWatchMovies: this.state.movies.concat(newMovie)});
    }

    watchViewToggle (e) {
        //conditional statement needed?
        this.setState({
            currentView: e.target.id
        })
    }

    watchListAdd (m) {
        let newWatchedList = [...this.state.watchedMovies];
        let newToWatchList = [...this.state.toWatchMovies];
        newWatchedList.push(m);
        newToWatchList.splice(newToWatchList.indexOf(m), 1);
        this.setState({
            watchedMovies: newWatchedList,
            toWatchMovies: newToWatchList
        });
    }

    watchListRemove (m) {
        let newWatchedList = [...this.state.watchedMovies];
        let newToWatchList = [...this.state.toWatchMovies];
        newToWatchList.push(m);
        newWatchedList.splice(newWatchedList.indexOf(m), 1);
        this.setState({
            watchedMovies: newWatchedList,
            toWatchMovies: newToWatchList
        });
    }

    render() {
        return (<div>
            <h1 id="title">MoooovieCow.com</h1>
            <SearchBar searchHandler={this.searchHandler}/>
            <SearchResultView searchHidden={this.state.searchHidden} hideSearchHandler={this.hideSearchHandler} searchResults={this.state.searchResults} searchTerm={this.state.searchTerm}/>
            <br/>
            <AddMovie addMovieHandler={this.addMovieHandler}/>
            <br/>
            <button id="watched" className="watch-view-toggle" onClick = {this.watchViewToggle}>Watched</button>
            <button id="toWatch" className="watch-view-toggle" onClick = {this.watchViewToggle}>To Watch</button>
            <h3>Available Titles:</h3>
            {/* <List movies={this.state.movies} watchListAdd={this.watchListAdd}/> */}
            <ListView currentView={this.state.currentView} watchedMovies={this.state.watchedMovies} toWatchMovies={this.state.toWatchMovies} watchListAdd={this.watchListAdd} watchListRemove={this.watchListRemove}/>
        </div>)
    }

};

export default App;