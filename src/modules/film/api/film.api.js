import axios from "axios";

export const fetchFilmList = () => {
  return axios.get(
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=JANUARY",
    {
      method: "GET",
      headers: {
        "X-API-KEY": "756378f6-32f3-4f6c-9090-8e0001c5a203",
        "Content-Type": "application/json",
      },
    }
  );
};

export const fetchDetails = (id) => {
  return axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
    method: "GET",
    headers: {
      "X-API-KEY": "756378f6-32f3-4f6c-9090-8e0001c5a203",
      "Content-Type": "application/json",
    },
  });
};
