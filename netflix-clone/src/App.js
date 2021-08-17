import React, { useEffect } from 'react';
import './App.css';
import movies from './moviesDB/moviesDB';

function App() {
  
  useEffect(()=>{
    const loadingData = async() => {
      const data = await movies.getMoviesList();
      console.log(data);
    }
    loadingData();
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
