import { GetApi, IsLocalhost } from "./api-config";
import GetTrendingAllMock from "@/lib/mocks/GetTrendingAll.json";
import GetTrendingMovieMock from "@/lib/mocks/GetTrendingMovie.json";
import GetTrendingTVMock from "@/lib/mocks/GetTrendingTV.json";
import GetLatestMovieMock from "@/lib/mocks/GetLatestMovie.json";
import GetLatestTVMock from "@/lib/mocks/GetLatestTV.json";
import GetUpcomingMovieMock from "@/lib/mocks/GetUpcomingMovie.json";
import GetMovieGenresMock from "@/lib/mocks/GetMovieGenres.json";
import GetTVGenresMock from "@/lib/mocks/GetTVGenres.json";
import { DataResponseType, GenreResponseType } from "@/types/types";
import { GENRE_MAP } from "./constants";

export const FetchTrending = async (
  trendingType: string = "all",
  pageNumber: number = 1
): Promise<DataResponseType> => {
  if (IsLocalhost()) {
    let mockData;
    switch (trendingType) {
      case "movie":
        mockData = GetTrendingMovieMock;
        break;
      case "tv":
        mockData = GetTrendingTVMock;
        break;
      default:
        mockData = GetTrendingAllMock;
    }
    return new Promise((res) => setTimeout(() => res(mockData), 500));
  }

  const url = `https://api.themoviedb.org/3/trending/${trendingType}/week?language=en-US&page=${pageNumber}`;
  return GetApi(url);
};

export const FetchLatestMovie = async (
  pageNumber: number = 1
): Promise<DataResponseType> => {
  if (IsLocalhost()) {
    return new Promise((res) => setTimeout(() => res(GetLatestMovieMock), 500));
  }
  const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`;
  return GetApi(url);
};

export const FetchLatestTV = async (
  pageNumber: number = 1
): Promise<DataResponseType> => {
  if (IsLocalhost()) {
    return new Promise((res) => setTimeout(() => res(GetLatestTVMock), 500));
  }
  const url = `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${pageNumber}`;
  return GetApi(url);
};

export const FetchUpcomingMovie = async (
  pageNumber: number = 1
): Promise<DataResponseType> => {
  if (IsLocalhost()) {
    return new Promise((res) =>
      setTimeout(() => res(GetUpcomingMovieMock), 500)
    );
  }
  const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pageNumber}`;
  return GetApi(url);
};

export const FetchMovieGenres = async (): Promise<GenreResponseType> => {
  if (IsLocalhost()) {
    return new Promise((res) => setTimeout(() => res(GetMovieGenresMock), 500));
  }
  const url = `https://api.themoviedb.org/3/genre/movie/list`;
  return GetApi(url);
};

export const FetchTVGenres = async (): Promise<GenreResponseType> => {
  if (IsLocalhost()) {
    return new Promise((res) => setTimeout(() => res(GetTVGenresMock), 500));
  }
  const url = `https://api.themoviedb.org/3/genre/tv/list`;
  return GetApi(url);
};

export const FetchGenreMap = async (): Promise<void> => {
  if (Object.keys(GENRE_MAP)?.length > 0) {
    return;
  }

  const [movieGenres, tvGenres] = await Promise.all([
    FetchMovieGenres(),
    FetchTVGenres(),
  ]);

  const allGenres = [...(movieGenres.genres || []), ...(tvGenres.genres || [])];

  allGenres.forEach((genre) => {
    GENRE_MAP[genre.id] = genre.name;
  });
};
