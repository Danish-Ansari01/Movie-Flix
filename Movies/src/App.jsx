import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MovieCard from "./assets/component/Cards";
function App() {
  return (
    <>
      <MovieCard
        movie={{
          title: "Dilwale",
          releaseDate: "2015",
          poster: "https://via.placeholder.com/150",
        }}
      />

      <MovieCard
        movie={{
          title: "Sholay",
          releaseDate: "1975",
          poster: "https://via.placeholder.com/150",
        }}
      />

      <MovieCard
        movie={{
          title: "Kabhi Khushi Kabhi Gham",
          releaseDate: "2001",
          poster: "https://via.placeholder.com/150",
        }}
      />
    </>
  );
}

export default App;
