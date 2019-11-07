import React from 'react';
import List from './List.jsx';
import SearchBar from './SearchBar.jsx';
import SearchResultView from './SearchResultView.jsx';
import AddMovie from './AddMovie.jsx';

var exampleData = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            watched: [],
            toWatch: [],
            currentView: null,
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
        this.getState = this.getState.bind(this);
        this.setCurrentView = this.setCurrentView.bind(this);
        // this.setCurrentView('toWatch');
    }

    getState (attr) {
        return this.state.attr;
    }

    setCurrentView (v) {
        this.setState({currentView: this.getState(v)});
    }

    searchHandler (e) {
        this.searchMovies(document.getElementsByClassName('search-input')[0].value);
    }

    searchMovies (str) {
        var currentResult = [];
        this.state.movies.forEach((movie) => {
            if (movie.title.toLowerCase().includes(str.toLowerCase())) {
                currentResult.push(movie);
            }
        });
        this.setState({
            searchResults: currentResult,
            searchHidden: false,
            searchTerm: str
        });
    }

    hideSearchHandler () {
        this.setState({searchHidden: true});
    }

    addMovieHandler () {
        let newMovie = [{title: document.getElementsByClassName('add-movie')[0].value}];
        this.setState({movies: this.state.movies.concat(newMovie)});
    }

    watchViewToggle () {
        console.log('cluck');
    }

    watchListAdd () {
        console.log('added');
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
            <button id="to-watch" className="watch-view-toggle" onClick = {this.watchViewToggle}>To Watch</button>
            <h3>Available Titles:</h3>
            <List movies={this.state.movies} watchListAdd={this.watchListAdd}/>
        </div>)
    }

};

export default App;