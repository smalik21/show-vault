import { GetApi, IsLocalhost } from "./api-config";
import GetTrendingAllMock from "@/lib/mocks/GetTrendingAll.json";
import GetTrendingMovieMock from "@/lib/mocks/GetTrendingMovie.json";
import GetTrendingTVMock from "@/lib/mocks/GetTrendingTV.json";
import { FetchTrendingResponseType } from "@/types/types";

export const FetchTrending = async (
  trendingType: string
): Promise<FetchTrendingResponseType> => {
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
