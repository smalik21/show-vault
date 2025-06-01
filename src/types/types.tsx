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
  poster_path: string;
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
