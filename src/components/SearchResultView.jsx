import React from 'react';
import ListItem from './listItem.jsx';

var SearchResultView = function (props) {
    return props.searchHidden === true ? null :
        (<div>
            {props.searchResults.length === 0 ? <h4>No Results Found :(</h4> :
                (<div>
                    <h4>{props.searchResults.length} result(s) found for {`"${props.searchTerm}"`}:</h4>
                    <ul>{props.searchResults.map((movie, i) => <ListItem movie={movie} key={i} />)}</ul>
                </div>)
            }
            <button name="hide-results" type="button" onClick={props.hideSearchHandler}>Hide Results</button>
        </div>)
};

export default SearchResultView;
