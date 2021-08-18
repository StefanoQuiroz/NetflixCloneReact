import React from 'react';
import './FeaturedMovie.scss';

const FeaturedMovie = (props) => {
    const {item} = props;
    const firstDate = new Date(item.data.first_air_date);
    const genres = [];
    item.data.genres.map(item => genres.push(item.name));
    return (
        <section className="featuredMovie" style={{
            backgroundSize: 'cover', //para cualquier dimension de la pantalla
            backgroundPosition: 'center', //centrado
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.data.backdrop_path})`,
        }}>
            <div className="featuredMovie--vertical">
                <div className="featuredMovie--horizontal">
                    <div className="featuredMovie--name">{item.data.original_name}</div>
                    <div className="featuredMovie--info">
                        <div className="featuredMovie--points">{item.data.vote_average} puntos</div>
                        <div className="featuredMovie--year">{firstDate.getFullYear()}</div>
                        <div className="featuredMovie--seasons">{item.data.number_of_seasons} temporada{item.data.number_of_seasons > 1 ? 's' : ''}</div>
                    </div>
                    <div className="featuredMovie--description">{item.data.overview}</div>
                    <div className="featuredMovie--buttons">
                        <a className="button--player" href={`/watch/${item.data.id}`}>► Ver</a>
                        <a className="button--add" href={`/list/add/${item.data.id}`}>+ Mi Lista</a>
                    </div>
                    <div className="featuredMovie--genres"><strong>Géneros:</strong> {genres.join(", ")}</div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedMovie;
