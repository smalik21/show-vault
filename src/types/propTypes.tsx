import {
  BorderRadius,
  Option,
  Padding,
  PresetColor,
  ShowType,
  TextSize,
} from "./types";

export type BannerItemType = {
  imdb: number;
  genre: string[];
  title: string;
  description: string;
  imageSrc: string;
};

export type ButtonPropsType = {
  children?: React.ReactNode;
  textSize?: TextSize;
  padding?: Padding;
  borderRadius?: BorderRadius;
  textColor?: PresetColor;
  bgColor?: PresetColor;
  outlineColor?: PresetColor;
  fontWeight?: number;
  fullWidth?: boolean;
  disabled?: boolean;
  outline?: boolean;
  onClick?: () => void;
};

export type IconPropsType = {
  width?: number;
  height?: number;
  fillColor?: string;
};

export type RadioButtonsPropsType = {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  options: Option[];
  textColor?: PresetColor;
  bgColor?: PresetColor;
  highlightColor?: PresetColor;
  borderRadius?: BorderRadius;
  padding?: Padding;
  textSize?: TextSize;
  fontWeight?: number;
};

export type SectionHeaderPropsType = {
  title: string;
  isTitleLink?: boolean;
  children?: React.ReactNode;
};

export type CardPropsType = {
  imageSrc: string;
  title: string;
  releaseYear: number;
  imdb: number;
  showType: ShowType;
};
