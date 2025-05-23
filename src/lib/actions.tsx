"use server";

import { DataResponseType } from "@/types/types";
import { FetchPopularMovie, FetchPopularTV, FetchTrending } from "./apis";

export const GetTrending = async (
  trendingType: string = "all",
  pageNumber: number = 1
): Promise<DataResponseType> => {
  try {
    return await FetchTrending(trendingType, pageNumber);
  } catch (error) {
    throw error;
  }
};

export const GetPopularMovie = async (
  pageNumber: number = 1
): Promise<DataResponseType> => {
  try {
    return await FetchPopularMovie(pageNumber);
  } catch (error) {
    throw error;
  }
};

export const GetPopularTV = async (
  pageNumber: number = 1
): Promise<DataResponseType> => {
  try {
    return await FetchPopularTV(pageNumber);
  } catch (error) {
    throw error;
  }
};
