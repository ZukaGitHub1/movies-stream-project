import React, {  useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import ContentcardDesign from "../../components/body/content/ContentcardDesign";
import ReactPaginate from 'react-paginate';
import '../../components/pagination/pagination.scss'
import ContentLayout from "../../layout/ContentLayout";
import { useMovieFetch } from "../../hook";



const Allmovie = () => {
   const navigate =  useNavigate(); 
   const [moviegenre, SetMoviegenre]= useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setcurrentPage] = useState(1);
  const {page} = useParams();

 const handlePageChange = (selectedObject) => { 
  
  setcurrentPage(selectedObject.selected);
      navigate( `${currentPage}`)
}
const {response} = useMovieFetch(`${process.env.REACT_APP_MOVIES_PRODUCT_API}=${page}`)
    

 
 
  return (
    <div>
      <ContentLayout props={moviegenre}>
      <div className="grid grid-cols-4 gap-5 p-5 py-10  mob-movie-div">
      {response && response.results.map(index => ( <ContentcardDesign list={index}/> )) }
      </div>
     </ContentLayout>
      {/* <ReactPaginate
					pageCount={response && response.total_pages}
					pageRange={page}
					onPageChange={handlePageChange}
					containerClassName={'container'}
					previousLinkClassName={'page'}
					breakClassName={'page'}
					nextLinkClassName={'page'}
					pageClassName={'page'}
					disabledClassName={'disabled'}
					activeClassName={'active'}
				/> */}
    </div>
  );
};

export default Allmovie;