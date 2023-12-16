import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Movie from "./components/Movie/Movie";
import Tv from "./components/Tv/Tv.jsx";
import { movies } from "./MovieDummy.js";
import { tv } from "./tvDummy.js";
import Home from "./components/pages/Home.jsx";
import MovieDetail from "./components/Movie/MovieDetail.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import Login from "./components/pages/Login.jsx";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/영화"
          element={
            <>
              {movies.results.map((item) => (
                <Movie movieData={item} key={item.id} />
              ))}
            </>
          }
        />
        <Route
          path="/TV프로그램"
          element={
            <>
              {tv.results.map((item) => (
                <Tv tvData={item} key={item.id} />
              ))}
            </>
          }
        />
        <Route path="/movie/:title" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/로그인" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
