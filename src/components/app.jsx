import React from 'react';
import List from './list.jsx';
import SearchBar from './searchBar.jsx';
import SearchResultView from './SearchResultView.jsx';

let moviesList = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: moviesList,
            searchResults: [],
            searchHidden: true,
            searchTerm: ''
        }
        this.searchHandler = this.searchHandler.bind(this);
        this.searchMovies = this.searchMovies.bind(this);
        this.hideSearchHandler = this.hideSearchHandler.bind(this);
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
        console.log(currentResult)
        this.setState({
            searchResults: currentResult,
            searchHidden: false,
            searchTerm: str
        });
    }

    hideSearchHandler () {
        this.setState({searchHidden: true});
        console.log('click');
    }

    render() {
        return (<div>
            <h1 id="title">MoooovieCow.com</h1>
            <SearchBar searchHandler={this.searchHandler}/>
            <SearchResultView searchHidden={this.state.searchHidden} hideSearchHandler={this.hideSearchHandler} searchResults={this.state.searchResults} searchTerm={this.state.searchTerm}/>
            <List movies={this.state.movies} />
        </div>)
    }
};

export default App;