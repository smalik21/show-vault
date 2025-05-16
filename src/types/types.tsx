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

export type ShowType = "movie" | "show";

export type LinkType = {
  name: string;
  path: string;
};

export type FooterColumnType = {
  title: string;
  links: LinkType[];
};
