import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import ContentcardDesign from '../../components/body/content/ContentcardDesign'
import {useMovieFetch} from '../../hook'
import ContentLayout from '../../layout/ContentLayout';


const TVserials = () => {
  const [moviegenre, SetMoviegenre]= useState(false);
 const {page} = useParams();
     const {response,  error}  = useMovieFetch(`${process.env.REACT_APP_TV_PRODUCT_API + page}`);
     console.log(response)
  return (
    <div>
    <ContentLayout props={moviegenre}>
    <div className="grid grid-cols-4 gap-5 p-5 pt-10 mob-movie-div">
      {response &&  response.results.map($ => (<ContentcardDesign list={$}/>))}
    </div>
    </ContentLayout>
    </div>
  )
}

export default TVserials

