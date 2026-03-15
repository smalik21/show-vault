"use server";

import {
  DataResponseType,
  MultiDataResponseType,
  MovieDetailsResponseType,
  TVDetailsResponseType,
  PersonDetailsResponseType,
} from "@/types/types";
import {
  FetchLatestMovie,
  FetchLatestTV,
  FetchPopularMovie,
  FetchPopularTV,
  FetchSearchResults,
  FetchSimilarMovie,
  FetchSimilarTV,
  FetchTrending,
  FetchUpcomingMovie,
  FetchMovieDetails,
  FetchTVDetails,
  FetchPersonDetails,
} from "../apis";

export const GetTrending = async (
  trendingType: string = "all",
  pageNumber: number = 1,
): Promise<DataResponseType> => {
  try {
    return await FetchTrending(trendingType, pageNumber);
  } catch (error) {
    throw error;
  }
};

export const GetSearchResults = async (
  query: string = "",
  pageNumber: number = 1,
): Promise<MultiDataResponseType> => {
  try {
    return await FetchSearchResults(query, pageNumber);
  } catch (error) {
    throw error;
  }
};

export const GetPopularMovie = async (
  pageNumber: number = 1,
): Promise<DataResponseType> => {
  try {
    return await FetchPopularMovie(pageNumber);
  } catch (error) {
    throw error;
  }
};

export const GetPopularTV = async (
  pageNumber: number = 1,
): Promise<DataResponseType> => {
  try {
    return await FetchPopularTV(pageNumber);
  } catch (error) {
    throw error;
  }
};

export const GetLatestMovie = async (
  pageNumber: number = 1,
): Promise<DataResponseType> => {
  try {
    return await FetchLatestMovie(pageNumber);
  } catch (error) {
    throw error;
  }
};

export const GetLatestTV = async (
  pageNumber: number = 1,
): Promise<DataResponseType> => {
  try {
    return await FetchLatestTV(pageNumber);
  } catch (error) {
    throw error;
  }
};

export const GetSimilarMovie = async (
  id: number,
  pageNumber: number = 1,
): Promise<DataResponseType> => {
  try {
    return await FetchSimilarMovie(id, pageNumber);
  } catch (error) {
    throw error;
  }
};

export const GetSimilarTV = async (
  id: number,
  pageNumber: number = 1,
): Promise<DataResponseType> => {
  try {
    return await FetchSimilarTV(id, pageNumber);
  } catch (error) {
    throw error;
  }
};

export const GetUpcomingMovie = async (
  pageNumber: number = 1,
): Promise<DataResponseType> => {
  try {
    return await FetchUpcomingMovie(pageNumber);
  } catch (error) {
    throw error;
  }
};

export const GetMovieDetails = async (
  movieId: string | number,
): Promise<MovieDetailsResponseType> => {
  try {
    return await FetchMovieDetails(movieId);
  } catch (error) {
    throw error;
  }
};

export const GetTVDetails = async (
  tvId: string | number,
): Promise<TVDetailsResponseType> => {
  try {
    return await FetchTVDetails(tvId);
  } catch (error) {
    throw error;
  }
};

export const GetPersonDetails = async (
  personId: number,
): Promise<PersonDetailsResponseType> => {
  try {
    return await FetchPersonDetails(personId);
  } catch (error) {
    throw error;
  }
};
