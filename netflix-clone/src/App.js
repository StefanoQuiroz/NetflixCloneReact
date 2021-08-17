import React, { createContext, useEffect, useState } from 'react';
import './App.scss';
import List from './view/List';
import movies from './moviesDB/moviesDB';
export const MyContext = createContext();

function App() {
  
  const [movieData, setMovieData] = useState([]);
  useEffect(()=>{
    const loadingData = async() => {
      const data = await movies.getMoviesList();
      setMovieData(data);
    }
    loadingData();
  },[])



  return (
    <div className="App">
      <MyContext.Provider value={{movieData, setMovieData}}>
        <List/>
      </MyContext.Provider>
      
    </div>
  );
}



export default App;
