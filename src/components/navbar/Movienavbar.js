import React from "react";
import "./Movienavbar.scss";
import { useMovieFetch } from "../../hook";
import { Link } from "react-router-dom";
import Scrollfunction from "../../components/scrollmenu/Scrollfunction";
const Movienavbar = ({changeGenre}) => {

  const { response } = useMovieFetch(
    `https://api.themoviedb.org/3/genre/${changeGenre ? 'movie' : 'tv' }/list?api_key=24d5a152341e66c347af6137f7385595&language=en-US`
  );
 
  return (
    <div className="genre-scroll">
    <Scrollfunction>
        <ul className="menu-bar  font-cinzel"> 
         
          {({changeGenre}) && response &&
            response.genres.map((index) => (
              <Link to={index.to}>
                <li key={index.id}>{index.name}</li>
              </Link>
            ))}
            
        </ul>
      </Scrollfunction>
    </div>
  );
};

export default Movienavbar;
