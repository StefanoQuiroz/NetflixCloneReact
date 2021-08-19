import React, { useState } from 'react';
import './MovieRow.scss';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const MovieRow = (props) => {
    const {title, movieList} = props;
    //console.log("movieList", movieList) //Look at data with axios problem

    const [scrollX, setScrollX] = useState(0);//-400    

    const buttonLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth/2); //150 era, luego mitad de la pantalla
        if(x > 0){ //el limite de la izquierda
            x=0;
        }
        setScrollX(x);
    }

    const buttonRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth/2); //150 era, luego mitad de la pantalla
        let listWidth = movieList.data.results.length * 164;//ancho total de la lista completa
        if((window.innerWidth - listWidth) > x){
            x= (window.innerWidth - listWidth) - 25; //-25 del padding izq y der
        }
        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <h1>{title}</h1>
            <div className="movieRow--left" onClick={buttonLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: "3rem"}}/>
            </div>
            <div className="movieRow--right" onClick={buttonRightArrow}>
                <NavigateNextIcon style={{fontSize: "3rem"}}/>
            </div>
            <div className="movieRow-listArea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: movieList.data.results.length * 170 //width de .movieRow--item
                }}>
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
