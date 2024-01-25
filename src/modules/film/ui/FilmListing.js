import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilmComponent from "./FilmComponent";
import { fetchFilms } from "../model/filmsListAsyncActions";
import axios from "axios";
import style from "../../../style/FilmListing.scss";

const FilmListing = () => {
  const films = useSelector((state) => state.filmsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  console.log("Films:", films);

  return (
    <div className="movie-list">
      <h2>Film Listing</h2>
      <div className="movie-container">
        <FilmComponent />
      </div>
    </div>
  );
};

export default FilmListing;
