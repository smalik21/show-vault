import { Option } from "@/types/types";

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
  { name: "TV Shows", path: "/shows" },
  { name: "Genre", path: "/genre" },
];

export const TRENDING_TYPES: Option[] = [
  { label: "All", value: "all" },
  { label: "Movies", value: "movies" },
  { label: "TV Shows", value: "tvshows" },
];
