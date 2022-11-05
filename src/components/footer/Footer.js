import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      
<footer className="p-4 bg-black opacity-80 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link to="" className="hover:underline">HERO OF MOVIES™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link  className="mr-4 hover:underline md:mr-6 ">Home</Link>
        </li>
        <li>
            <Link  className="mr-4 hover:underline md:mr-6">About us</Link>
        </li>
        <li>
            <Link  className="mr-4 hover:underline md:mr-6">Contact</Link>
        </li>
    </ul>
</footer>

    </div>
  )
}

export default Footer
