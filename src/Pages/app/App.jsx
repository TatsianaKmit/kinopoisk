import { NavLink, Routes, Route } from "react-router-dom";
import Header from "./../../modules/Header";
import Error from "./Error";
import "../../style/app.scss";
import FilmListing from "./../../modules/film/ui/FilmListing";
import FilmDetails from "./../../modules/film/ui/FilmDetails";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<FilmListing />} />
            <Route path="/film/:filmID" element={<FilmDetails />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
