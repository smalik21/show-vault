"use server";

import { DataResponseType } from "@/types/types";
import { FetchTrending } from "./apis";

export const GetTrending = async (
  trendingType: string
): Promise<DataResponseType> => {
  try {
    return await FetchTrending(trendingType);
  } catch (error) {
    throw error;
  }
};
