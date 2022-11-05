import React from 'react'
import './SingleIdPageDesign.scss'
const SingleidPageDesign = ({list}) => {
    const {runtime,genres,id,overview,first_air_date,original_title, backdrop_path, original_name, path, poster_path}  = list
   
  return (
    <div className='single-movie-div   bg-slate-900 '>
     <div className='flex w-full justify-evenly max-w-screen-xl'>
    <div className='single-movie-img-div w-2/4' style={{backgroundImage: `url(${"https://image.tmdb.org/t/p/w500" + poster_path})`}}>
     </div>
     <div className='block leading-8 py-5  w-2/4  text-white'>
    <h1 >{original_title}</h1>
    <h2 className="flex justify-center gap-2">Genre :{genres && genres.map(index => (<>{index.name}</>))}</h2>
      <h3 className=''>{overview}</h3>
      </div> 
      <div className="movie-detail-div">
        <h3>Duration:{runtime}</h3>
    </div>
    </div>

   
  

   </div>
   
  )
}

export default SingleidPageDesign
