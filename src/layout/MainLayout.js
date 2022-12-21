import React, { useState } from "react";


import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/menu/Navbar";




const MainLayout = ({ children }) => {

    
  return (
    <div className="font-quicksand">
   
     
        <Navbar />
        {children}
        <Footer />
     
    </div>
  );
};

export default MainLayout;
