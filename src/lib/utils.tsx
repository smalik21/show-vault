import { CardPropsType } from "@/types/propTypes";
import {
  DataItemType,
  DataResponseType,
  MovieDetailsResponseType,
  MultiDataResponseType,
  PersonDetailsResponseType,
  PersonDetailsType,
  PersonType,
  ShowDataType,
  ShowType,
  TVDetailsResponseType,
  VideoType,
} from "@/types/types";
import { DetailSectionPropsType } from "@/components/ui/detail-section";
import { BannerItemPropsType } from "@/components/home/banner-slideshow/banner-item";
import { FetchGenreMap } from "./apis";

export const GetMediumImagePath = (
  posterPath?: string | null
): string | null => {
  return posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : null;
};

export const GetHighImagePath = (
  backdropPath?: string | null
): string | null => {
  return backdropPath
    ? `https://image.tmdb.org/t/p/w1280${backdropPath}`
    : null;
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
    return `$${(budget / 1_000_000_000)?.toFixed(2)} B`;
  }
  if (budget >= 1_000_000) {
    return `$${(budget / 1_000_000)?.toFixed(2)} M`;
  }
  if (budget >= 1_000) {
    return `$${budget.toLocaleString()}`;
  }
  return `$${budget}`;
};

export const TransformBannerData = async (
  bannerDataResponse: DataResponseType
): Promise<BannerItemPropsType[]> => {
  if (!bannerDataResponse || !Array.isArray(bannerDataResponse.results)) {
    return [];
  }

  const genreMap = await FetchGenreMap();

  const transformedData: BannerItemPropsType[] = bannerDataResponse.results.map(
    (item) => {
      return {
        id: item.id,
        title: item.title || item.name || "",
        description: item.overview || "",
        imageSrc: GetHighImagePath(item.backdrop_path ?? item.poster_path),
        imdb: Number(item.vote_average?.toFixed(1)),
        genre: item.genre_ids.map((id) => genreMap[id]),
        showType: item.media_type as ShowType,
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
        imdb: Number(item.vote_average?.toFixed(1)),
        showType: item.media_type,
      } as CardPropsType;
    }
  );

  return transformedData;
};

export const TransformSearchData = (
  dataResponse: MultiDataResponseType
): CardPropsType[] => {
  if (!dataResponse || !Array.isArray(dataResponse.results)) {
    return [];
  }

  const transformedData: CardPropsType[] = dataResponse.results.map((item) => {
    if (item.media_type === "person") {
      const person = item as PersonType;
      return {
        id: person.id,
        title: person.name,
        releaseYear: "",
        imageSrc: GetMediumImagePath(person.profile_path),
        imdb: 0,
        showType: "person",
      } as CardPropsType;
    } else {
      const dataItem = item as DataItemType;
      return {
        id: dataItem.id,
        title: dataItem.title || dataItem.name || "",
        releaseYear:
          dataItem.release_date?.split("-")[0] ||
          dataItem.first_air_date?.split("-")[0] ||
          "",
        imageSrc: GetMediumImagePath(dataItem.poster_path),
        imdb: Number(dataItem.vote_average?.toFixed(1)),
        showType: dataItem.media_type,
      } as CardPropsType;
    }
  });

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
      imdb: Number(item.vote_average?.toFixed(1)) || 0,
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
    imdb: Number(dataResponse.vote_average?.toFixed(1)),
    imageSrc: dataResponse.poster_path
      ? GetMediumImagePath(dataResponse.poster_path)
      : null,
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
    imdb: Number(dataResponse.vote_average?.toFixed(1)),
    imageSrc: dataResponse.poster_path
      ? GetMediumImagePath(dataResponse.poster_path)
      : null,
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

export const TransformPersonDetailsData = (
  dataResponse: PersonDetailsResponseType
): {
  personDetails: PersonDetailsType;
  featuredContent: CardPropsType[];
} => {
  const personDetails: PersonDetailsType = {
    id: dataResponse.id,
    name: dataResponse.name,
    imageSrc: GetMediumImagePath(dataResponse.profile_path),
    biography: dataResponse.biography || "",
    birthday: dataResponse.birthday || null,
    placeOfBirth: dataResponse.place_of_birth || null,
    knownFor: dataResponse.known_for_department || "",
    alsoKnownAs: dataResponse.also_known_as || [],
    popularity: dataResponse.popularity,
    imdbId: dataResponse.imdb_id,
  };

  const featuredContent: CardPropsType[] = (
    dataResponse.combined_credits.cast || []
  ).map((item) => ({
    id: item.id,
    title: item.title || item.name || "",
    releaseYear:
      item.release_date?.split("-")[0] ||
      item.first_air_date?.split("-")[0] ||
      "",
    imageSrc: GetMediumImagePath(item.poster_path),
    imdb: Number(item.vote_average?.toFixed(1)) || 0,
    showType: item.media_type as ShowType,
  }));

  return { personDetails, featuredContent };
};
