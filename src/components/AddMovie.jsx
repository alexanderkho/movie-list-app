import React from 'react';

var AddMovie = function (props) {
    return (<form>
        <input type="text" className="add-movie"/>
        <button type="button" onClick={props.addMovieHandler}>Add a new movie</button>
    </form>)
}

export default AddMovie;