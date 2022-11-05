import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
const MainLayout = ({children}) => {
  return (
    <div className='font-quicksand'>
     <Navbar />
     {children}
     <Footer />
    </div>
  )
}

export default MainLayout
