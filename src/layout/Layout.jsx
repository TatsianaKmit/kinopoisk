import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ListPage from "../pages/ListPage";
import FilmDetails from "../modules/film/ui/FilmDetails";
import Error from "../pages/Error";

export default function Layout() {

    return (
        <>
            <header className="header">
                <Header />
            </header>
            <main className="main">
                <Routes>
                    <Route index element={<ListPage />} />
                    <Route path="/" element={<ListPage />} />
                    <Route path="/film/:filmID" element={<FilmDetails />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </>
    );
}