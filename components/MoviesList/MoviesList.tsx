import { MovieItem, TMovieItemProps } from "../../components";
import { List } from "./MoviesList.styled";

type TMoviesList = {
  movies: [TMovieItemProps];
};

export const MoviesList: React.FC<TMoviesList> = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, poster_path, title }) => {
        return (
          <MovieItem key={id} id={id} poster_path={poster_path} title={title} />
        );
      })}
    </List>
  );
};
