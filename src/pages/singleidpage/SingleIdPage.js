import React from 'react'
import { useParams } from 'react-router-dom';
import SingleidPageDesign from './SingleidPageDesign'
import { useState , useEffect} from 'react';
import axios from 'axios';

  
const SingleIdPage = () => {
  const [movieId, setMovieId] = useState([]);
   const {id} = useParams();

   
   useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=24d5a152341e66c347af6137f7385595&language=en-US`)
    .then((response) => {
      setMovieId(response.data);
    });
   }, [id])
console.log(movieId)
   
  return (
    <div>
    
      <SingleidPageDesign  list={movieId}/>
    </div>
  )
}

export default SingleIdPage
