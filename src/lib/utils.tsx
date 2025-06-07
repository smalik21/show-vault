import { CardPropsType } from "@/types/propTypes";
import {
  DataResponseType,
  MovieDetailsResponseType,
  PersonType,
  ShowDataType,
  ShowType,
  TVDetailsResponseType,
  VideoType,
} from "@/types/types";
import { GENRE_MAP } from "./constants";
import { DetailSectionPropsType } from "@/components/ui/detail-section";
import { BannerItemPropsType } from "@/components/home/banner-slideshow/banner-item";

export const GetMediumImagePath = (posterPath?: string | null) => {
  return posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "https://images.unsplash.com/photo-1576473318185-48d76fc03314?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
};

export const GetHighImagePath = (backdropPath?: string | null) => {
  return backdropPath
    ? `https://image.tmdb.org/t/p/w1280${backdropPath}`
    : "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
};

export const GetVideoKey = (videos?: VideoType[]) => {
  if (!videos || !Array.isArray(videos)) return undefined;

  const trailer = videos.find((v) => v.type === "Trailer");
  if (trailer) return trailer.key;

  const teaser = videos.find((v) => v.type === "Teaser");
  if (teaser) return teaser.key;

  return undefined;
};

export const GetVideoUrl = (videoKey?: string) => {
  if (!videoKey) return undefined;
  return `https://www.youtube.com/watch?v=${videoKey}`;
};

export const GetVideoThumbnail = (videoKey?: string) => {
  if (!videoKey) return undefined;
  return `https://img.youtube.com/vi/${videoKey}/hqdefault.jpg`;
};

export const GetTransformDataFunction = (showDataType: ShowDataType) => {
  switch (showDataType) {
    case "popular":
      return TransformDataResponse;
    case "latest":
      return TransformDataResponse;
    default:
      return TransformDataResponse;
  }
};

export const formatBudget = (budget?: number): string => {
  if (!budget || budget <= 0) return "N/A";
  if (budget >= 1_000_000_000) {
    return `$${(budget / 1_000_000_000).toFixed(2)} B`;
  }
  if (budget >= 1_000_000) {
    return `$${(budget / 1_000_000).toFixed(2)} M`;
  }
  if (budget >= 1_000) {
    return `$${budget.toLocaleString()}`;
  }
  return `$${budget}`;
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
        id: item.id,
        title: item.title || item.name || "",
        description: item.overview || "",
        imageSrc: GetHighImagePath(item.backdrop_path ?? item.poster_path),
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
        id: item.id,
        title: item.title || item.name || "",
        releaseYear:
          item.release_date?.split("-")[0] ||
          item.first_air_date?.split("-")[0] ||
          "",
        imageSrc: GetMediumImagePath(item.poster_path),
        imdb: Number(item.vote_average.toFixed(1)),
        showType: item.media_type,
      } as CardPropsType;
    }
  );

  return transformedData;
};

export const TransformDataResponse = (
  dataResponse: DataResponseType,
  showType: ShowType
): CardPropsType[] => {
  if (!dataResponse || !Array.isArray(dataResponse.results)) {
    return [];
  }

  const transformedData: CardPropsType[] = dataResponse.results.map((item) => {
    return {
      id: item.id,
      title: item.title || item.name || "",
      releaseYear:
        item.release_date?.split("-")[0] ||
        item.first_air_date?.split("-")[0] ||
        "",
      imageSrc: GetMediumImagePath(item.poster_path),
      imdb: Number(item.vote_average.toFixed(1)),
      showType: showType,
    } as CardPropsType;
  });

  return transformedData;
};

export const TransformMovieDetailsData = (
  dataResponse: MovieDetailsResponseType
): {
  videoKey?: string;
  detailSection: DetailSectionPropsType;
  cast: PersonType[];
  similarMovies: DataResponseType;
} => {
  const videoKey = GetVideoKey(dataResponse.videos?.results);

  const detailSection: DetailSectionPropsType = {
    type: "movie",
    title: dataResponse.title || dataResponse.original_title || "",
    imdb: Number(dataResponse.vote_average?.toFixed(1)) || 0,
    imageSrc: dataResponse.poster_path
      ? GetMediumImagePath(dataResponse.poster_path)
      : "",
    description: dataResponse.overview || "",
    releasedDate: dataResponse.release_date || "",
    duration: dataResponse.runtime || 0,
    genre: dataResponse.genres?.map((g) => g.name).join(", ") || "",
    country:
      dataResponse.production_countries?.map((c) => c.name).join(", ") || "",
    budget: formatBudget(dataResponse.budget),
    production:
      dataResponse.production_companies?.map((c) => c.name).join(", ") || "",
  };

  const cast: PersonType[] = dataResponse.credits.cast;
  const similarMovies: DataResponseType = dataResponse.similar;

  return { videoKey, detailSection, cast, similarMovies };
};

export const TransformTVDetailsData = (
  dataResponse: TVDetailsResponseType
): {
  videoKey?: string;
  detailSection: DetailSectionPropsType;
  cast: PersonType[];
  similarTV: DataResponseType;
} => {
  const videoKey = GetVideoKey(dataResponse.videos?.results);

  const detailSection: DetailSectionPropsType = {
    type: "movie",
    title: dataResponse.name || dataResponse.original_name || "",
    imdb: Number(dataResponse.vote_average?.toFixed(1)) || 0,
    imageSrc: dataResponse.poster_path
      ? GetMediumImagePath(dataResponse.poster_path)
      : "",
    description: dataResponse.overview || "",
    releasedDate: dataResponse.first_air_date || "",
    seasons: dataResponse.number_of_seasons || 0,
    genre: dataResponse.genres?.map((g) => g.name).join(", ") || "",
    country:
      dataResponse.production_countries?.map((c) => c.name).join(", ") || "",
    networks: dataResponse.networks?.map((n) => n.name).join(", ") || "",
    production:
      dataResponse.production_companies?.map((c) => c.name).join(", ") || "",
  };

  const cast: PersonType[] = dataResponse.credits.cast;
  const similarTV: DataResponseType = dataResponse.similar;

  return { videoKey, detailSection, cast, similarTV };
};
