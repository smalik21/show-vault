import { CardPropsType } from "@/types/propTypes";
import { FetchTrendingResponseType } from "@/types/types";

export const TransformTrendingData = (
  trendingDataResponse: FetchTrendingResponseType
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
        imageSrc: item.poster_path
          ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
          : "https://images.unsplash.com/photo-1576473318185-48d76fc03314?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imdb: Number(item.vote_average.toFixed(1)),
        showType: item.media_type,
      } as CardPropsType;
    }
  );

  return transformedData;
};
