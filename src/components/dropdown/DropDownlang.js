import React, { Component } from 'react'
import '../../styles/lang.btn.css'
export default function DropDownlang({languages , changeLang}) {
  
    const lang = languages;
        
    return (
      <div className='flex flex-col  gap-3 float-left  lang-btn'>
        <button onClick={() => changeLang(lang.english, "en", "ltr")}>English</button>
        <button onClick={() => changeLang(lang.russian , "ru", "ltr")}>Русский</button>
        <button onClick={() => changeLang(lang.georgia, "ka", "ltr")}>ქართული</button>
        <button>español</button>
      </div>
    )
  
}




