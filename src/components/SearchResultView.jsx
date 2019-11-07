import React from 'react';
import SearchItem from './SearchItem.jsx';

var SearchResultView = function (props) {
    var watched = props.searchResults.watched;
    var toWatch = props.searchResults.toWatch;
    return props.searchHidden === true ? null :
        (<div id="search-result-view">
            {watched.length === 0 && toWatch.length === 0 ? <h4>No Results Found :(</h4> :
                (<div>
                    <h4>{watched.length + toWatch.length} result(s) found for {`"${props.searchTerm}"`}:</h4>
                    {watched.length === 0 ? null : 
                        <div>
                            <h3>Movies You've Already Watched:</h3>
                            <ul>{watched.map((movie, i) => <SearchItem movie={movie} key={i} />)}</ul>
                        </div>
                    }
                    {toWatch.length === 0 ? null :
                        <div>
                            <h3>Movies in Your To-Watch List</h3>
                            <ul>{toWatch.map((movie, i) => <SearchItem movie={movie} key={i} />)}</ul>
                        </div>
                    }
                    {/* <ul>{props.searchResults.map((movie, i) => <SearchItem movie={movie} key={i} />)}</ul> */}
                </div>)
            }
            <button name="hide-results" type="button" onClick={props.hideSearchHandler}>Hide Results</button>
        </div>)
};

export default SearchResultView;
