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
  backdrop_path: string;
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

export type GenreResponseType = {
  genres: {
    id: number;
    name: string;
  }[];
};
