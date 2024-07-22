import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FadeLoader } from 'react-spinners';

const FilmComponent = () => {
  const { films, loading, error } = useSelector((state) => state.filmsList);

  return (
    <>
      {loading ? (
        <div className="spin">
          <FadeLoader color="#FFFFFF" speedMultiplier={6} />
        </div>
      ) : films.length > 0 ? (
        <div className="list-page__wrapper">
          {films.map((item) => {

            const { kinopoiskId, nameRu, year, duration, posterUrlPreview } = item;
            const hours = Math.floor(duration / 60);
            const minutes = duration % 60;
            const formattedHours = String(hours).padStart(2, "0");
            const formattedMinutes = String(minutes).padStart(2, "0");

            return (
              <div className="list-page__card" key={kinopoiskId}>
                <Link to={`/film/${kinopoiskId}`}>
                  <div className="list-page__photo">
                    <img src={posterUrlPreview} alt={nameRu} />
                  </div>
                  <div className="list-page__text">
                    <div className="list-page__title">
                      <h4>{nameRu}</h4>
                    </div>
                    <div className="list-page__year">
                      <h4>{year}</h4>
                    </div>
                    <div className="list-page__duration">
                      <h4>{`${formattedHours}:${formattedMinutes}`}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};

export default FilmComponent;