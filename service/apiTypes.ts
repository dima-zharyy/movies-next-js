export interface IMovieDetails {
  title: string;
  overview: string;
  vote_average: number;
  genres: Array<{ id: number; name: string }>;
  poster_path: string | null;
}

export type TMovieReviews = Array<{
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: null | number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: Date;
  url: string;
}>;

export type TMovies = Array<{
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}>;

export type TTrending = {
  page: number;
  results: Array<{
    id: number;
    video: boolean;
    vote_count: number;
    vote_average: number;
    title: string;
    release_date: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    backdrop_path: string;
    adult: boolean;
    overview: string;
    poster_path: string;
    popularity: number;
  }>;
  total_pages: number;
  total_results: number;
};

export type TCast = Array<{
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}>;
