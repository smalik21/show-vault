import {
  GetLatestMovie,
  GetLatestTV,
  GetPopularMovie,
  GetPopularTV,
  GetSimilarMovie,
  GetSimilarTV,
} from "@/lib/actions";

export type ThemeType = "light" | "dark";

export type TextSize = "xs" | "sm" | "md" | "lg";

export type BorderRadius = "sm" | "md" | "full";

export type Padding = "sm" | "md";

export type PresetColor =
  | "dark-slate"
  | "slate"
  | "orange"
  | "light"
  | "dark"
  | "yellow"
  | "gray"
  | "black"
  | "white";

export type Option = {
  label: string;
  value: string;
};

export type ShowType = "movie" | "tv";

export type ShowDataType = "popular" | "latest";

export type GetDataFunctionType =
  | typeof GetPopularMovie
  | typeof GetPopularTV
  | typeof GetLatestMovie
  | typeof GetLatestTV
  | typeof GetSimilarMovie
  | typeof GetSimilarTV;

export type LinkType = {
  name: string;
  path: string;
};

export type FooterColumnType = {
  title: string;
  links: LinkType[];
};

export type DataResponseType = {
  page: number;
  results: DataItemType[];
  total_pages: number;
  total_results: number;
};

export type DataItemType = {
  adult: boolean;
  backdrop_path?: string | null;
  genre_ids: number[];
  id: number;
  media_type?: string;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
};

export type GenreType = {
  id: number;
  name: string;
};

export type GenreResponseType = {
  genres: GenreType[];
};

export type VideoType = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export type PersonType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: string;
  job?: string;
};

export type PersonDetailsType = {
  id: number;
  name: string;
  imageSrc: string | null;
  biography: string;
  birthday: string | null;
  placeOfBirth: string | null;
  knownFor: string;
  alsoKnownAs: string[];
  popularity: number;
  imdbId: string;
};

export type MovieDetailsResponseType = {
  adult: boolean;
  backdrop_path?: string | null;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path?: string | null;
    backdrop_path?: string | null;
  } | null;
  budget: number;
  genres: GenreType[];
  homepage?: string;
  id: number;
  imdb_id?: string;
  origin_country?: string[];
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path?: string | null;
  production_companies?: {
    id: number;
    logo_path?: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries?: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date?: string;
  revenue: number;
  runtime?: number;
  spoken_languages?: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status?: string;
  tagline?: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  videos?: {
    results: VideoType[];
  };
  credits: {
    cast: PersonType[];
  };
  similar: DataResponseType;
};

export type TVDetailsResponseType = {
  adult: boolean;
  backdrop_path?: string | null;
  created_by?: {
    id: number;
    credit_id: string;
    name: string;
    original_name: string;
    gender: number;
    profile_path: string | null;
  }[];
  episode_run_time?: number[];
  first_air_date?: string;
  genres: GenreType[];
  homepage?: string;
  id: number;
  in_production?: boolean;
  languages?: string[];
  last_air_date?: string;
  last_episode_to_air?: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string | null;
  };
  name: string;
  networks?: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_language: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path?: string | null;
  production_companies?: {
    id: number;
    logo_path?: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries?: {
    iso_3166_1: string;
    name: string;
  }[];
  seasons?: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
  }[];
  spoken_languages?: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status?: string;
  tagline?: string;
  type?: string;
  vote_average: number;
  vote_count: number;
  videos?: {
    results: VideoType[];
  };
  credits: {
    cast: PersonType[];
    crew?: PersonType[];
  };
  similar: DataResponseType;
};

export type PersonDetailsResponseType = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string | null;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string | null;
  popularity: number;
  profile_path: string | null;
  combined_credits: {
    cast: DataItemType[];
    crew?: DataItemType[];
  };
};
