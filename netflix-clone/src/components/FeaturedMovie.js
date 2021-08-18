import React from 'react';
import './FeaturedMovie.scss';

const FeaturedMovie = (props) => {
    const {item} = props;
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
                        <div className="featuredMovie--year">2021</div>
                        <div className="featuredMovie--points">{item.data.number_of_seasons} temporada{item.data.number_of_seasons > 1 ? 's' : ''}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedMovie;
