import { GetApi, IsLocalhost } from "./api-config";
import GetTrendingAllMock from "@/lib/mocks/GetTrendingAll.json";
import GetTrendingMovieMock from "@/lib/mocks/GetTrendingMovie.json";
import GetTrendingTVMock from "@/lib/mocks/GetTrendingTV.json";
import GetLatestMovieMock from "@/lib/mocks/GetLatestMovie.json";
import GetLatestTVMock from "@/lib/mocks/GetLatestTV.json";
import { DataResponseType } from "@/types/types";

export const FetchTrending = async (
  trendingType: string
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

  const url = `https://api.themoviedb.org/3/trending/${trendingType}/week?language=en-US`;
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
