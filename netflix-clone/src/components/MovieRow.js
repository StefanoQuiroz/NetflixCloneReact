import React from 'react';
import './MovieRow.scss';

const MovieRow = (props) => {
    const {title, movieList} = props;
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {movieList && movieList.map((items, index) => (
                    <li key={index}>{items}</li>
                ))}
            </ul>
        </div>
    );
}

export default MovieRow;
