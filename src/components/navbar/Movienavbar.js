import React from "react";
import "../../styles/Movienavbar.scss";
import { useMovieFetch } from "../../hook";
import { Link } from "react-router-dom";
import Scrollfunction from "../../components/scrollmenu/Scrollfunction";
import { selectLanguage } from "../../redux/action/languages";
import { connect } from "react-redux";
import { useContext } from "react";
import movietvContext from "../../context/movietvContext";


const Movienavbar = ({  languages }) => {
  const {   
    genrelang
   } = languages;

   const genreChange = useContext(movietvContext)
     console.log(genrelang)
  const { response } = useMovieFetch(
    `https://api.themoviedb.org/3/genre/${genreChange}/list?api_key=24d5a152341e66c347af6137f7385595&language=${genrelang}`
  );
 
  return (
    <div className="genre-scroll">
    <Scrollfunction>
     
         
          {({genreChange}) && response &&
            response.genres.map((index) => (  
               <ul key={index.id} className="menu-bar  font-cinzel"> 
              <Link to={index.to} >
                <li >{index.name}</li>
              </Link> 
              </ul>
            ))}
             
       
     </Scrollfunction>
    </div>
  );
};
const mapStateToProps = (state) => ({
  languages: state.Languages,
});


export default connect(mapStateToProps, { selectLanguage ,})(Movienavbar);

