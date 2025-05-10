import { Option, PresetColors } from "./types";

export type BannerItemType = {
  imdb: number;
  genre: string[];
  title: string;
  description: string;
  imageSrc: string;
};

export type ButtonPropsType = {
  children?: React.ReactNode;
  textSize?: "xs" | "sm" | "md" | "lg";
  padding?: "sm" | "md";
  borderRadius?: "sm" | "md" | "full";
  textColor?: PresetColors;
  bgColor?: PresetColors;
  outlineColor?: PresetColors;
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
  textColor?: PresetColors;
  bgColor?: PresetColors;
  highlightColor?: PresetColors;
  borderRadius?: "sm" | "md" | "full";
  padding?: "sm" | "md";
  textSize?: "xs" | "sm" | "md" | "lg";
  fontWeight?: number;
};

export type SectionHeaderPropsType = {
  title: string;
  children?: React.ReactNode;
};
