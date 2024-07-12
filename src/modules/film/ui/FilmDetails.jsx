import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFilmDetails,
  removeSelectedFilm,
} from "../model/filmDetailsAsyncActions";

const FilmDetails = () => {
  const film = useSelector((state) => state.selectedFilm);
  const { posterUrl, nameRu, nameEn, slogan, countries, genres, description, year, ratingKinopoisk, ratingImdb
    , ratingFilmCritics, filmLength } =
    film;
  const hours = Math.floor(filmLength / 60);
  const minutes = filmLength % 60;
  const dispatch = useDispatch();
  const { filmID } = useParams();

  useEffect(() => {
    if (filmID && filmID !== "") dispatch(fetchFilmDetails(filmID));
    return () => {
      dispatch(removeSelectedFilm());
    };
  }, [filmID]);

  console.log("FILM DETAILS", film);

  return (
    <div className="item-page">

      <div className='container-tiny'>

        <div className="item-page__wrapper">
          {Object.keys(film).length === 0 ? (
            <div>...Loading</div>
          ) : (

            <>
              <div className="item-page__title_ru">{`${nameRu} (${year})`}</div>
              <div className="item-page__title_en">{nameEn}</div>
              <div className="item-page__photo">
                <img src={posterUrl} alt={nameRu} />
              </div>
              <div className="item-page__table">
                <div className="item-page__table-wrapper">
                  <div className="item-page__row"><h2>О фильме</h2></div>
                  <div className="item-page__row">Год</div>
                  <div className="item-page__row">{year}</div>
                  <div className="item-page__row">Страна</div>
                  <div className="item-page__row">{countries && countries.length > 0 ? (
                    <>
                      {countries.map(item => item.country).join(', ')}
                    </>
                  ) : (
                    null
                  )}</div>
                  <div className="item-page__row">Жанр</div>
                  <div className="item-page__row">  {genres && genres.length > 0 ? (
                    <>
                      {genres.map(item => item.genre).join(', ')}
                    </>
                  ) : (
                    null
                  )}</div>
                  <div className="item-page__row">Слоган</div>
                  <div className="item-page__row">{slogan}</div>
                  <div className="item-page__row">Рейтинг IMDb</div>
                  <div className="item-page__row">{ratingImdb}</div>
                  <div className="item-page__row">Рейтинг кинопоиска</div>
                  <div className="item-page__row">{ratingKinopoisk}</div>
                  <div className="item-page__row">Рейтинг кинокритиков</div>
                  <div className="item-page__row">{ratingFilmCritics}</div>
                  <div className="item-page__row">Время</div>
                  <div className="item-page__row">{`${hours} ч ${minutes} мин`}</div>
                </div>
              </div>
              <div className="item-page__description">{description}</div>
            </>
          )}
        </div>

      </div >

    </div>
  );
};

export default FilmDetails;
