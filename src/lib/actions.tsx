"use server";

import { DataResponseType } from "@/types/types";
import {
  FetchLatestMovie,
  FetchLatestTV,
  FetchPopularMovie,
  FetchPopularTV,
  FetchTrending,
} from "./apis";

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

export const GetLatestMovie = async (
  pageNumber: number = 1
): Promise<DataResponseType> => {
  try {
    return await FetchLatestMovie(pageNumber);
  } catch (error) {
    throw error;
  }
};

export const GetLatestTV = async (
  pageNumber: number = 1
): Promise<DataResponseType> => {
  try {
    return await FetchLatestTV(pageNumber);
  } catch (error) {
    throw error;
  }
};
