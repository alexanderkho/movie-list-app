import React from 'react';
import List from './list.js';
// import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                { title: 'Mean Girls' },
                { title: 'Hackers' },
                { title: 'The Grey' },
                { title: 'Sunshine' },
                { title: 'Ex Machina' },
            ]
        }
    }

    render() {
        return (<div><h1>Movies</h1>
            <List movies={this.state.movies}/>
        </div>)
    }
};

export default App;