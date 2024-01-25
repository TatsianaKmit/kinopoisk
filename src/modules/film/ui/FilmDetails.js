import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFilmDetails,
  removeSelectedFilm,
} from "./../model/filmDetailsAsyncActions";
import style from "../../../style/FilmDetails.scss";

const FilmDetails = () => {
  const film = useSelector((state) => state.selectedFilm);
  const { posterUrl, nameRu, description, year, duration, ratingKinopoisk } =
    film;
  const { filmID } = useParams();
  const dispatch = useDispatch();
  console.log("FILM DETAILS", film);

  useEffect(() => {
    if (filmID && filmID !== "") dispatch(fetchFilmDetails(filmID));
    return () => {
      dispatch(removeSelectedFilm());
    };
  }, [filmID]);

  return (
    <div className="movie-section">
      {Object.keys(film).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{nameRu}</div>
            <div className="description">{description}</div>
            <div className="movie-info">
              <div className="year">{year}</div>
              <div className="movie-plot">{duration}</div>
              <div className="rating">{ratingKinopoisk}</div>
            </div>
          </div>
          <div className="section-right">
            <img src={posterUrl} alt={nameRu} />
          </div>
        </>
      )}
    </div>
  );
};

export default FilmDetails;
