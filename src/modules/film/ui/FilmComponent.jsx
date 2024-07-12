import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FilmComponent = () => {

  const films = useSelector((state) => state.filmsList.films);
  const renderList = films.map((film) => {
    const { kinopoiskId, nameRu, year, duration, posterUrlPreview } = film;

    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    return (
      Object.keys(film).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="list-page__card" key={kinopoiskId}>

          <Link to={`/film/${kinopoiskId}`}>

            <div className="list-page__photo">
              <img src={posterUrlPreview} alt={nameRu} />
            </div>

            <div className="list-page__text">
              <div className="list-page__title"><h4>{nameRu}</h4></div>
              <div className="list-page__year">
                <h4>{year}</h4>
              </div>
              <div className="list-page__duration">
                <h4>{`${formattedHours}:${formattedMinutes}`}</h4>
              </div>
            </div>

          </Link >
        </div >
      )
    );
  });

  return <>{renderList}</>;
};

export default FilmComponent;