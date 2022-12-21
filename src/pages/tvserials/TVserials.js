import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ContentcardDesign from '../../components/body/content/ContentcardDesign'
import { MovieContext } from '../../context/MovieTvchangeContext';
import movietvContext from '../../context/movietvContext';

import {useMovieFetch} from '../../hook'
import ContentLayout from '../../layout/ContentLayout';


const TVserials = () => {
  const [moviegenre, setMoviegenre] = useState('tv');
  const [movietv, setMovietv] = useState('tv');
 const {page} = useParams();
 const { setMoviename} = useContext(MovieContext);
   useEffect(() => {
     setMoviename(movietv)
   }, [setMoviename, movietv])
 
     const {response}  = useMovieFetch(`${process.env.REACT_APP_TV_PRODUCT_API}&language=en-US&page=1`);
     console.log(response)
  return (
    <div>
     <movietvContext.Provider value={moviegenre}>
    <ContentLayout >
    <div className="grid grid-cols-4 gap-5 p-5 pt-10 mob-movie-div">
      {response &&  response.results.map($ => (<div key={$.id}><ContentcardDesign list={$}/></div>))}
    </div>
    </ContentLayout>
    </movietvContext.Provider>
    </div>
  )
}

export default TVserials

