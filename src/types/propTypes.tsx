import {
  BorderRadius,
  DataResponseType,
  Option,
  Padding,
  PresetColor,
  ShowDataType,
  ShowType,
  TextSize,
} from "./types";

export type BannerItemPropsType = {
  id: number;
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
  link?: string;
  children?: React.ReactNode;
};

export type CardPropsType = {
  id: number;
  imageSrc: string;
  title: string;
  releaseYear: string;
  imdb: number;
  showType: ShowType;
};

export type CardsContainerProps = {
  children: React.ReactNode;
};

export type TrendingSectionPropsType = {
  initialTrendingData: CardPropsType[];
  GetTrending: (
    trendingType?: string,
    pageNumber?: number
  ) => Promise<DataResponseType>;
};

export type TrendingPagePropsType = {
  initialPage: number;
  initialTab: string;
  initialTotal: number;
  initialDataCount: number;
  initialTrendingData: CardPropsType[];
  GetTrending: (
    trendingType?: string,
    pageNumber?: number
  ) => Promise<DataResponseType>;
};

export type PaginatedCardsPropsType = {
  headerTitle: string;
  initialPage: number;
  initialTotal: number;
  initialDataCount: number;
  initialData: CardPropsType[];
  mediaType: ShowType;
  showDataType: ShowDataType;
  GetData: (pageNumber?: number) => Promise<DataResponseType>;
};

export type BannerSlideshowPropsType = {
  initialBannerSlideshowData: BannerItemPropsType[];
};
