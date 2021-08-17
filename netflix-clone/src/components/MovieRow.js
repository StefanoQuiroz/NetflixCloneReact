import React from 'react';
import './MovieRow.scss';

const MovieRow = (props) => {
    const {title, movieList} = props;
    //console.log("movieList", movieList) //Look at data with axios problem
    return (
        <div>
            <h1>{title}</h1>
            <div className="movieRow--list">
                {movieList.data.results && movieList.data.results.map((items, index) => (
                    <img key ={index} src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} alt={items.original_title}/>
                ))}
            </div>
             
        </div>
    );
}

export default MovieRow;
