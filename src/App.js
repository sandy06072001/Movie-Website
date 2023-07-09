import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header.js";
import Home from "./pages/Home/Home.js";
import MovieList from "./component/movieList/movieList.js";
import Movie from "./pages/Home/movie/movie";
const App=()=> {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="movie/:id" element={<Movie/>}></Route>
            <Route path="movies/:type" element={<MovieList/>}></Route>
            <Route path="/" element={<h1>Error Page</h1>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
