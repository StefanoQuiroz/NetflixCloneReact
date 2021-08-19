import React from 'react';
import './MovieRow.scss';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const MovieRow = (props) => {
    const {title, movieList} = props;
    //console.log("movieList", movieList) //Look at data with axios problem
    return (
        <div className="movieRow">
            <h1>{title}</h1>
            <div className="movieRow--left">
                <NavigateBeforeIcon style={{fontSize: "3rem"}}/>
            </div>
            <div className="movieRow--right">
                <NavigateNextIcon style={{fontSize: "3rem"}}/>
            </div>
            <div className="movieRow-listArea">
                <div className="movieRow--list">
                    {movieList.data.results && movieList.data.results.map((items, index) => (
                        <div className="movieRow--item" key={index}>
                            <img src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} alt={items.original_title}/>
                        </div>
                    ))}
                </div>
            </div>
             
        </div>
    );
}

export default MovieRow;
