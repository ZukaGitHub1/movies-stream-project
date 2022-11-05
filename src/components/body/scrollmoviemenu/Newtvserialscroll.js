import React from 'react'
import {useMovieFetch} from '../../../hook'
import Scrollfunction from "../../scrollmenu/Scrollfunction";
import ContentcardDesign from "../content/ContentcardDesign";
const Newtvserialscroll = () => {
 const {response} = useMovieFetch(`${process.env.REACT_APP_TV_PRODUCT_API}`);
  return (
   
    <div className='movie-scroll '>
        <h1 className="text-2xl  p-3 m-3  border-b-8 w-1/5 border-gray-800 rounded-md text-white">New TV Series</h1>
        <Scrollfunction>
        {response && response.results.map((index) => (
          <div key={index.id} className="w-80 p-3 ">
            <ContentcardDesign list={index} />
          </div>
        ))}
        </Scrollfunction>
    </div>
  )
}

export default Newtvserialscroll
