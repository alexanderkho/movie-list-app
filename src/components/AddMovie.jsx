import React from 'react';

var AddMovie = function (props) {
    return (<form>
        <input type="text" className="add-movie"/>
        <button type="button" onClick={props.addMovieHandler}>Add Movie to to-watch list</button>
    </form>)
}

export default AddMovie;