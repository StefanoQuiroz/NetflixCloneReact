import axios from 'axios';

const apiKey = "be2c659c71e603df199901e2e0dad1c8";
const URL = "https://api.themoviedb.org/3";

const asyncFunc = async (endPoint) => {
    try{
        const data = await axios.get(`${URL}${endPoint}`);
        return data;
    } catch(error){
        console.log("Error", error);
    }
}


const movies = {
    getMoviesList : async () => ([
        {
            slug: "originals",
            title: "Series originales de Netflix",
            movieList: await asyncFunc(`/discover/tv?api_key=${apiKey}&with_networks=213&language=es-ES`)
        },
        {
            slug: "trending",
            title: "Series recomendadas",
            movieList: await asyncFunc(`/trending/all/week?api_key=${apiKey}&with_networks=213&language=es-ES`)
        },
        {
            slug: "toprated",
            title: "Los mas visto",
            movieList: await asyncFunc(`/movie/top_rated?api_key=${apiKey}&with_networks=213&language=es-ES`)
        },
        {
            slug: "action",
            title: "Acción",
            movieList: await asyncFunc(`/discover/movie?api_key=${apiKey}&with_networks=213&language=es-ES&with_genres=28`)
        },
        {
            slug: "comedy",
            title: "Comedia",
            movieList: await asyncFunc(`/discover/movie?api_key=${apiKey}&with_networks=213&language=es-ES&with_genres=35`) 
        },
        {
            slug: "horror",
            title: "Terror",
            movieList: await asyncFunc(`/discover/movie?api_key=${apiKey}&with_networks=213&language=es-ES&with_genres=27`)
        },
        {
            slug: "romance",
            title: "Romance",
            movieList: await asyncFunc(`/discover/movie?api_key=${apiKey}&with_networks=213&language=es-ES&with_genres=10749`)
        },
        {
            slug: "documentary",
            title: "Documentales",
            movieList: await asyncFunc(`/discover/movie?api_key=${apiKey}&with_networks=213&language=es-ES&with_genres=99`) 
        },
    ]),

    getMovieInfo : async (id, tipo ) => {
        // /movie/{movie_id}
        // /tv/{tv_id}
        let info = {};
        if(id){
            if(tipo === "movie"){
                info = await asyncFunc(`/movie/${id}?api_key=${apiKey}&language=es-ES`)
            }
            if(tipo === "tv"){
                info = await asyncFunc(`/tv/${id}?api_key=${apiKey}&language=es-ES`)
            }
        }
        return info;
    }
}

export default movies;