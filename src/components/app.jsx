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
        // this.dropDownHandler = this.dropDownHandler.bind(this);
    }

    searchHandler (e) {
        e.preventDefault();
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

    addMovieHandler (e) {
        e.preventDefault();
        let newMovie = [{
            title: document.getElementsByClassName('add-movie')[0].value,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Pharetra convallis posuere morbi leo urna.',
            rating: Math.floor(Math.random() * 5),
            director: ['Steve sr.', 'Steve jr.', 'Duck'][Math.floor(Math.random() * 3)],
            displayInfo: false
        }];
        this.setState({toWatchMovies: this.state.toWatchMovies.concat(newMovie)});
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

    dropDownHandler(m) {
        console.log('beep');
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
            <ListView currentView={this.state.currentView} watchedMovies={this.state.watchedMovies} toWatchMovies={this.state.toWatchMovies} watchListAdd={this.watchListAdd} watchListRemove={this.watchListRemove} dropDownHandler={this.dropDownHandler}/>
        </div>)
    }


};

export default App;