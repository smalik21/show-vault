"use server";

import { DataResponseType } from "@/types/types";
import { FetchTrending } from "./apis";

export const GetTrending = async (
  trendingType: string,
  pageNumber: number = 1
): Promise<DataResponseType> => {
  try {
    return await FetchTrending(trendingType, pageNumber);
  } catch (error) {
    throw error;
  }
};
