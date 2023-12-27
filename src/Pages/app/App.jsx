import { NavLink, Routes, Route } from "react-router-dom";
import FilmListing from "../../Components/FilmListing";
import Header from "../../Components/Header";
import Error from "./Error";
import "../../style/app.scss";
import FilmDetails from "../../Components/FilmDetails";

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
