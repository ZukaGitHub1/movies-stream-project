import React from "react";
import { useParams } from "react-router-dom";
import SingleidPageDesign from "./SingleidPageDesign";
import { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { selectLanguage } from "../../redux/action/languages";
import { useContext } from "react";
import {MovieContext} from "../../context/MovieTvchangeContext"






const SingleIdPage = () => {
  const [movieId, setMovieId] = useState([]);
  const { id } = useParams();
 
  const { moviename } = useContext(MovieContext);
  console.log(moviename)
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${moviename}/${id}?api_key=24d5a152341e66c347af6137f7385595&language=en-US`
      )
      .then((response) => {
        setMovieId(response.data);
      });
  }, [id, moviename]);
  
  console.log(movieId);

  return (
    <div>
      <SingleidPageDesign list={movieId} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  languages: state.Languages,
});

export default connect(mapStateToProps,{selectLanguage,})(SingleIdPage);
