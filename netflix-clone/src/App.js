import React, { createContext, useEffect, useState } from 'react';
import './App.scss';
import List from './view/List';
import movies from './moviesDB/moviesDB';
import FeaturedMovie from './components/FeaturedMovie';
export const MyContext = createContext();

function App() {
  
  const [movieData, setMovieData] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  useEffect(()=>{
    const loadingData = async() => {
      //Lista
      const data = await movies.getMoviesList();
      setMovieData(data);
      //Featured
      const originals = data.filter(item => item.slug === "originals");
      const randomChoosen = Math.floor(Math.random() * (originals[0].movieList.data.results.length - 1));
      const movieChoosen = originals[0].movieList.data.results[randomChoosen];
      //console.log(movieChoosen);
      const movieChoosenInfo = await movies.getMovieInfo(movieChoosen.id, 'tv');
      //console.log(movieChoosenInfo);
      setFeaturedData(movieChoosenInfo);
    }
    loadingData();
  },[])



  return (
    <div className="App">
      <MyContext.Provider value={{movieData, setMovieData}}>
        {featuredData && <FeaturedMovie featuredData={featuredData}/>}
        <List/>
      </MyContext.Provider>
      
    </div>
  );
}



export default App;
