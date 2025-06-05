import { ShowType } from "./types";

export type IconPropsType = {
  width?: number;
  height?: number;
  fillColor?: string;
};

export type CardPropsType = {
  id: number;
  imageSrc: string;
  title: string;
  releaseYear: string;
  imdb: number;
  showType: ShowType;
};
