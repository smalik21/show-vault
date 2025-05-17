"use server";

import { FetchTrendingResponseType } from "@/types/types";
import { FetchTrending } from "./apis";

export const GetTrending = async (
  trendingType: string
): Promise<FetchTrendingResponseType> => {
  try {
    return await FetchTrending(trendingType);
  } catch (error) {
    throw error;
  }
};
