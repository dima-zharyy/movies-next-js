import axios from "axios";
import { IMovieDetails } from "./apiTypes";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const apiKey = process.env.API_KEY;

export const getTrending = async <T>(): Promise<T> => {
  const response = await axios.get(`/trending/movie/week?api_key=${apiKey}`);
  return response.data;
};

export const getMovies = async <T>(query: string | string[]): Promise<T> => {
  const response = await axios.get(
    `/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return response.data.results;
};

export const getDetails = async (
  id: string | string[] | undefined
): Promise<IMovieDetails> => {
  const response = await axios.get(
    `/movie/${id}?api_key=${apiKey}&language=en-US`
  );
  const data = await response.data;
  const { title, overview, vote_average, genres, poster_path } = data;
  return { title, overview, vote_average, genres, poster_path };
};

export const getCredits = async <T>(
  id: string | string[] | undefined
): Promise<T> => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${apiKey}&language=en-US`
  );

  return response.data.cast;
};

export const getReviews = async <T>(
  id: string | string[] | undefined
): Promise<T> => {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`
  );

  return response.data.results;
};
