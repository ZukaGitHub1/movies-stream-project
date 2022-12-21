import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContentcardDesign from "../../components/body/content/ContentcardDesign";
import ReactPaginate from "react-paginate";
import "../../styles/pagination.scss";
import ContentLayout from "../../layout/ContentLayout";
import { useMovieFetch } from "../../hook";
import movietvContext from "../../context/movietvContext";
import { MovieContext } from "../../context/MovieTvchangeContext";
import { useContext } from "react";
import { useEffect } from "react";



 
const Allmovie = () => {
  const navigate = useNavigate();
  const [moviegenre, setMoviegenre] = useState('movie');
  const [movietv, setMovietv] = useState('movie');
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setcurrentPage] = useState(1);
  const { page } = useParams();
     
  const { setMoviename} = useContext(MovieContext);

  useEffect(() => {
   setMoviename(movietv)
  }, [setMoviename, movietv])
  
  const handlePageChange = (selectedObject) => {
    setcurrentPage(selectedObject.selected);
    navigate(`${currentPage}`);
  };
  const { response } = useMovieFetch(
    `${process.env.REACT_APP_MOVIES_PRODUCT_API}&language=en-US&page=${page}`
  );
      
  return (
    <div>
    <movietvContext.Provider value={moviegenre} >
      <ContentLayout >
        <div className="grid grid-cols-4 gap-5 p-5 py-10  mob-movie-div">
          {response &&
            response.results.map((index) => <div key={index.id}><ContentcardDesign list={index} /></div>)}
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
        </movietvContext.Provider>
    </div>
  );
};

export default Allmovie;
