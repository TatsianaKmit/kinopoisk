import { Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import Error from "./pages/Error";
import ListPage from "./pages/ListPage";
import FilmDetails from "./modules/film/ui/FilmDetails";



function App() {
  return (
    <>
      <div className="app">

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ListPage />} />
            <Route path="/film/:filmID" element={<FilmDetails />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>

      </div>

    </>
  );
}

export default App;
