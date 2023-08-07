import { useEffect, useState } from "react";
import logo from "../logo.svg";
import 'bootstrap/dist/css/bootstrap.css';
import Cards from "./cards";

const list=(item)=>{
    
   if(item!== ''){
    return(
            <Cards img={item.show.image?.medium|| 'https://dummyimage.com/300x400/faf5fa/0a0a0a&text=Loading..'} 
            name={item.show.name} genre1={item.show.genres[0]} 
            genre2={item.show.genres[1]} genre3={item.show.genres[2]}
            rating={item.show.rating?.average || 'NULL'}
            time={item.show.schedule.time} day={item.show.schedule.days} 
            summary={item.show.summary} />
    )
   }

}

const MoviesName = () =>{

    const [getData,setData] =useState([]);

    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));

    },[]);


    return(
        <div>
        <div >
            <div>
                {getData.map(list)}
            </div>
        </div>
        </div>
    )
}

export default MoviesName;