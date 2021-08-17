import React, { useContext } from 'react';
import { MyContext } from '../App';
import MovieRow from '../components/MovieRow';

const List = () => {
    const {movieData, setMovieData} = useContext(MyContext);
    return (
        <div className="list">
            {movieData&&movieData.map((items, index) => (
                <MovieRow key={index} title={items.title} movieList={items.movieData}/>
            ))}            
        </div>
    );
}

export default List;
