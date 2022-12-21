import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pagination.scss';


const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

   
    return (
        <nav>
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <Link className="page-link" 
                        onClick={prevPage} 
                        >
                        
                        Previous
                    </Link>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <Link onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link' 
                            >
                            
                            {pgNumber}
                        </Link>
                    </li>
                ))}
                <li className="page-item">
                    <Link className="page-link" 
                        onClick={nextPage}
                        >
                        
                        Next
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination