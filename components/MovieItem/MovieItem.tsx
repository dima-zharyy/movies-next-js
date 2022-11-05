import Image from "next/image";
import { Movie, Poster, Title, Item } from "./MovieItem.styled";

export type TMovieItemProps = {
  id: number;
  poster_path: string;
  title: string;
};

export const MovieItem: React.FC<TMovieItemProps> = ({
  id,
  poster_path,
  title,
}) => {
  const imgPlaceholder = `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`;
  const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <Item>
      <Movie href={`/movies/${id}`}>
        <Poster
          src={poster_path ? imgUrl : imgPlaceholder}
          alt={title}
          width="100"
          height="150"
        />
        <Title>{title}</Title>
      </Movie>
    </Item>
  );
};
