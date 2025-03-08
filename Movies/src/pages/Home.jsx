import MovieCard from "../component/Cards";
function Home() {
  const movies = [
    { id: 1, title: "Sholay", releaseDate: "1975" },
    { id: 1, title: "Dilwale", releaseDate: "2015" },
    { id: 1, title: "Titanic", releaseDate: "1993" },
    { id: 1, title: "Kabhi Khushi Kabhi Gham", releaseDate: "2001" },
  ];

  const handleSearch = () => {};
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search Movies....."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
