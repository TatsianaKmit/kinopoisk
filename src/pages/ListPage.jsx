import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import FilmComponent from "../modules/film/ui/FilmComponent";
import { fetchFilms } from "../modules/film/model/filmsListAsyncActions";

const ListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  return (
    <div className="list-page">
      <div className="container-wide">
        <FilmComponent />
      </div>
    </div>
  );
};

export default ListPage;
