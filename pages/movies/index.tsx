import { useState, useEffect } from "react";
import { SearchBar, MoviesList, notify, TMoviesList } from "../../components";
import { getMovies } from "../../service/api";
import { useRouter } from "next/router";
import { TMovies } from "../../service/apiTypes";

export default function Movies() {
  const [movies, setMovies] = useState<TMovies>([]);
  const router = useRouter();

  useEffect(() => {
    if (!router.query.query) {
      setMovies([]);
      return;
    }

    getMovies<TMovies>(router.query.query)
      .then((data) => {
        setMovies(data);
        if (data.length === 0) {
          notify(`There is no result on query: ${router.query.query}`);
        }
      })
      .catch((error) => console.log(error.message));
  }, [router.query.query]);

  const handleSubmit = (query: string) => {
    router.push(`${router.pathname}?query=${query}`);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
}
