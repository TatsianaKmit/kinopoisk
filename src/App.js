import { Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import Error from "./pages/Error";
import ListPage from "./pages/ListPage";
import FilmDetails from "./modules/film/ui/FilmDetails";
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

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
