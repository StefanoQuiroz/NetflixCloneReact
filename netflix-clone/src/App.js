import React, { createContext, useEffect, useState } from 'react';
import './App.scss';
import List from './view/List';
import movies from './moviesDB/moviesDB';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import { GiFalconMoon } from "react-icons/gi";

export const MyContext = createContext();

function App() {
  
  const [movieData, setMovieData] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false); //para el scroll de la pagina hacia abajo
  const year = new Date();
  useEffect(()=>{
    const loadingData = async() => {
      //Lista
      const data = await movies.getMoviesList();
      //momentaneamente ... setMovieData(data);
      setMovieData(data);
      //Featured
      const originals = data.filter(item => item.slug === "originals");
      const randomChoosen = Math.floor(Math.random() * (originals[0].movieList.data.results.length - 1));
      const movieChoosen = originals[0].movieList.data.results[randomChoosen];
      //console.log(movieChoosen);
      const movieChoosenInfo = await movies.getMovieInfo(movieChoosen.id, 'tv');
      console.log(movieChoosenInfo);
      //momentaneamente ... setFeaturedData(movieChoosenInfo);
      setFeaturedData(movieChoosenInfo);
    }
    loadingData();
  },[])

  //Para monitorear la pagina 
  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener); //cuando tenenmos un eventlistener scroll ejecutamos la funcion scrollListener
    //Para remover ese eventListener
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);



  return (
    <div className="App">
      <Header black={blackHeader}/>
      {featuredData && <FeaturedMovie item={featuredData}/>}
      <MyContext.Provider value={{movieData, setMovieData}}>
        <List/>
      </MyContext.Provider>
      <footer>
        Made by J-S Developers <span role="img" aria-label="copy-right"> <GiFalconMoon style={{marginRight: "0.2rem"}}/>©{year.getFullYear()} </span>
        Derechos de Imagen de Netflix
      </footer>
      {movieData.length < 1 && 
        <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2240,c_limit/Netflix_LoadTime.gif" alt="loading" />
        </div>
      }
    </div>
  );
}



export default App;
