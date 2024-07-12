import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilmComponent from "../modules/film/ui/FilmComponent";
import { fetchFilms } from "../modules/film/model/filmsListAsyncActions";

const ListPage = () => {
  const films = useSelector((state) => state.filmsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  console.log("Films:", films);

  return (
    <div className="list-page">
      <div className="container-wide">
        <div className="list-page__wrapper">
          <FilmComponent />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
