import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY

export const fetchFilmList = () => {
  return axios.get(
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=JANUARY",
    {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    }
  );
};

export const fetchDetails = (id) => {
  return axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
    method: "GET",
    headers: {
      "X-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
  });
};
