import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchBar, MoviesList, notify } from "../../components";
import { Container } from "./movies.styled.jsx";
import { getMovies } from "service";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) {
      return;
    }

    getMovies(query)
      .then((data) => {
        setMovies(data);
        if (data.length === 0) {
          notify(`There is no result on query: ${query}`);
        }
      })
      .catch((error) => console.log(error.message));
  }, [query]);

  const handleSubmit = (query) => {
    setSearchParams({ query });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </Container>
  );
}
