import { BannerItemPropsType, CardPropsType } from "@/types/propTypes";
import { DataResponseType, ShowType } from "@/types/types";
import { GENRE_MAP } from "./constants";

export const getMediumImagePath = (posterPath?: string) => {
  return posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "https://images.unsplash.com/photo-1576473318185-48d76fc03314?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
};

export const getHighImagePath = (backdropPath?: string) => {
  return backdropPath
    ? `https://image.tmdb.org/t/p/w1280${backdropPath}`
    : "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
};

export const TransformBannerData = (
  bannerDataResponse: DataResponseType
): BannerItemPropsType[] => {
  if (!bannerDataResponse || !Array.isArray(bannerDataResponse.results)) {
    return [];
  }

  const transformedData: BannerItemPropsType[] = bannerDataResponse.results.map(
    (item) => {
      return {
        title: item.title || item.name || "",
        description: item.overview || "",
        imageSrc: getHighImagePath(item.backdrop_path ?? item.poster_path),
        imdb: Number(item.vote_average.toFixed(1)),
        genre: item.genre_ids.map((id) => GENRE_MAP[id] || id.toString()),
      } as BannerItemPropsType;
    }
  );

  return transformedData;
};

export const TransformTrendingData = (
  trendingDataResponse: DataResponseType
): CardPropsType[] => {
  if (!trendingDataResponse || !Array.isArray(trendingDataResponse.results)) {
    return [];
  }

  const transformedData: CardPropsType[] = trendingDataResponse.results.map(
    (item) => {
      return {
        title: item.title || item.name || "",
        releaseYear:
          item.release_date?.split("-")[0] ||
          item.first_air_date?.split("-")[0] ||
          "",
        imageSrc: getMediumImagePath(item.poster_path),
        imdb: Number(item.vote_average.toFixed(1)),
        showType: item.media_type,
      } as CardPropsType;
    }
  );

  return transformedData;
};

export const TransformLatestData = (
  dataResponse: DataResponseType,
  showType: ShowType
): CardPropsType[] => {
  if (!dataResponse || !Array.isArray(dataResponse.results)) {
    return [];
  }

  const transformedData: CardPropsType[] = dataResponse.results.map((item) => {
    return {
      title: item.title || item.name || "",
      releaseYear:
        item.release_date?.split("-")[0] ||
        item.first_air_date?.split("-")[0] ||
        "",
      imageSrc: getMediumImagePath(item.poster_path),
      imdb: Number(item.vote_average.toFixed(1)),
      showType: showType,
    } as CardPropsType;
  });

  return transformedData;
};

export const TransformPopularData = (
  dataResponse: DataResponseType,
  showType: ShowType
): CardPropsType[] => {
  if (!dataResponse || !Array.isArray(dataResponse.results)) {
    return [];
  }

  const transformedData: CardPropsType[] = dataResponse.results.map((item) => {
    return {
      title: item.title || item.name || "",
      releaseYear:
        item.release_date?.split("-")[0] ||
        item.first_air_date?.split("-")[0] ||
        "",
      imageSrc: getMediumImagePath(item.poster_path),
      imdb: Number(item.vote_average.toFixed(1)),
      showType: showType,
    } as CardPropsType;
  });

  return transformedData;
};
