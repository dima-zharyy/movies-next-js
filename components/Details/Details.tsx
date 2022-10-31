import { useLocation } from "react-router-dom";
import {
  Wrapper,
  Container,
  Poster,
  Title,
  Text,
  Subtitle,
  BackLink,
} from "./Details.styled";
import { GenresList, AdditionalInfo } from "components";
import PropTypes from "prop-types";

export const Details = ({ movieDetails }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  const { title, overview, vote_average, genres, poster_path } = movieDetails;

  const imgPlaceholder = `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`;
  const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const userScore = Math.round((vote_average / 10) * 100);

  return (
    <Container>
      <Poster src={poster_path ? `${imgUrl}` : `${imgPlaceholder}`} alt="" />
      <Wrapper>
        <Title>{title}</Title>
        <Text>{`User score: ${userScore}%`}</Text>
        <Subtitle>Overview</Subtitle>
        <Text>{overview ? overview : `Sorry! There is no overview`}</Text>
        <Subtitle>Genres</Subtitle>
        <GenresList genres={genres} />
        <AdditionalInfo location={backLinkHref} />
        <BackLink to={backLinkHref}>go back</BackLink>
      </Wrapper>
    </Container>
  );
};

Details.propTypes = {
  movieDetails: PropTypes.exact({
    genres: PropTypes.arrayOf(PropTypes.object),
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};
