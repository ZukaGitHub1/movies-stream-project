import React from 'react'
import Movienavbar from '../components/navbar/Movienavbar'


const ContentLayout = ({props, children}) => {
  return (
    <div >
      <Movienavbar  changeGenre={props}/>
  
      {children}
     
    </div>
  )
}

export default ContentLayout

