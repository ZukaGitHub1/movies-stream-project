import React from 'react'
import { useMovieFetch } from '../../../hook'
import Scrollfunction from '../../scrollmenu/Scrollfunction'
import ContentcardDesign from '../content/ContentcardDesign'

const Nowplaying = () => {
    const {response} = useMovieFetch(`${process.env.REACT_APP_NOWPLAYING_PRODUCT_API}`)
  return (
    <div>
    <div className='movie-scroll' >
  <h1 className="text-2xl p-3 m-3  border-b-8 w-1/5 border-gray-800 rounded-md  text-white">Now Playing</h1>
  <Scrollfunction>
       {response && response.results.map((index) => (
          <div key={index.id} className="w-80 p-3 ">
            <ContentcardDesign list={index} />
          </div>
        ))}
   </Scrollfunction>
    </div>
      
    </div>
  )
}

export default Nowplaying
