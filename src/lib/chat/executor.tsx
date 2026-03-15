import {
  ToolName,
  ToolArgsType,
  ToolResponseType,
  SearchMoviesArgs,
  SearchTVArgs,
  SearchPeopleArgs,
  SearchMultiArgs,
  GetTrendingArgs,
  GetPopularArgs,
  GetMovieDetailsArgs,
  GetTVDetailsArgs,
  GetPersonDetailsArgs,
  GetSimilarMoviesArgs,
  GetSimilarTVArgs,
  NavigateToArgs,
  SearchResponse,
  SearchPeopleResponse,
  SearchMultiResponse,
  BrowseResponse,
  MovieDetailsResponse,
  TVDetailsResponse,
  PersonDetailsResponse,
  SimilarResponse,
  NavigateToResponse,
} from "@/types/chat";
import { DataItemType, PersonType } from "@/types/types";
import {
  GetSearchResults,
  GetTrending,
  GetPopularMovie,
  GetPopularTV,
  GetLatestMovie,
  GetLatestTV,
  GetUpcomingMovie,
  GetMovieDetails,
  GetTVDetails,
  GetPersonDetails,
  GetSimilarMovie,
  GetSimilarTV,
} from "@/lib/actions/tmdb";

/**
 * Execute a tool call with proper type safety
 */
export async function executeTool(
  name: ToolName,
  args: ToolArgsType,
): Promise<ToolResponseType> {
  // Search tools
  if (name === "search_movies") {
    return await searchMovies((args as SearchMoviesArgs).query);
  }

  if (name === "search_tv") {
    return await searchTV((args as SearchTVArgs).query);
  }

  if (name === "search_people") {
    return await searchPeople((args as SearchPeopleArgs).query);
  }

  if (name === "search_multi") {
    return await searchMulti((args as SearchMultiArgs).query);
  }

  // Browse tools
  if (name === "get_trending") {
    return await getTrending((args as GetTrendingArgs).type);
  }

  if (name === "get_popular") {
    return await getPopular((args as GetPopularArgs).type);
  }

  if (name === "get_latest_movies") {
    return await getLatestMovies();
  }

  if (name === "get_latest_tv") {
    return await getLatestTV();
  }

  if (name === "get_upcoming_movies") {
    return await getUpcomingMovies();
  }

  // Details tools
  if (name === "get_movie_details") {
    return await getMovieDetails((args as GetMovieDetailsArgs).movieId);
  }

  if (name === "get_tv_details") {
    return await getTVDetails((args as GetTVDetailsArgs).tvId);
  }

  if (name === "get_person_details") {
    return await getPersonDetails((args as GetPersonDetailsArgs).personId);
  }

  // Similar tools
  if (name === "get_similar_movies") {
    return await getSimilarMovies((args as GetSimilarMoviesArgs).movieId);
  }

  if (name === "get_similar_tv") {
    return await getSimilarTV((args as GetSimilarTVArgs).tvId);
  }

  // Navigation
  if (name === "navigate_to") {
    return {
      type: "navigate",
      route: (args as NavigateToArgs).route,
    } as NavigateToResponse;
  }

  // Exhaustive check for TypeScript
  const exhaustive: never = name;
  throw new Error(`Unknown tool: ${exhaustive}`);
}

/**
 * Search for movies by query string
 */
async function searchMovies(query: string): Promise<SearchResponse> {
  try {
    const result = await GetSearchResults(query, 1);
    const movies = result.results.filter((item): item is DataItemType => {
      if (!("genre_ids" in item)) return false;
      if ("media_type" in item && item.media_type) {
        return item.media_type === "movie";
      }
      return true;
    });
    return {
      success: true,
      results: movies,
      count: movies.length,
    };
  } catch (error) {
    return {
      success: false,
      results: [],
      count: 0,
      error: error instanceof Error ? error.message : "Failed to search movies",
    };
  }
}

/**
 * Search for TV shows by query string
 */
async function searchTV(query: string): Promise<SearchResponse> {
  try {
    const result = await GetSearchResults(query, 1);
    const shows = result.results.filter((item): item is DataItemType => {
      if (!("genre_ids" in item)) return false;
      if ("media_type" in item && item.media_type) {
        return item.media_type === "tv";
      }
      return false;
    });
    return {
      success: true,
      results: shows,
      count: shows.length,
    };
  } catch (error) {
    return {
      success: false,
      results: [],
      count: 0,
      error:
        error instanceof Error ? error.message : "Failed to search TV shows",
    };
  }
}

/**
 * Search for people (actors, directors, etc.)
 */
async function searchPeople(query: string): Promise<SearchPeopleResponse> {
  try {
    const result = await GetSearchResults(query, 1);
    const people = result.results.filter((item): item is PersonType => {
      return "known_for_department" in item || "original_name" in item;
    });
    return {
      success: true,
      results: people,
      count: people.length,
    };
  } catch (error) {
    return {
      success: false,
      results: [],
      count: 0,
      error: error instanceof Error ? error.message : "Failed to search people",
    };
  }
}

/**
 * Search across all content types (movies, TV, people)
 */
async function searchMulti(query: string): Promise<SearchMultiResponse> {
  try {
    const result = await GetSearchResults(query, 1);
    return {
      success: true,
      results: result.results,
      count: result.results.length,
    };
  } catch (error) {
    return {
      success: false,
      results: [],
      count: 0,
      error: error instanceof Error ? error.message : "Failed to search",
    };
  }
}

/**
 * Get detailed information about a movie
 */
async function getMovieDetails(movieId: number): Promise<MovieDetailsResponse> {
  try {
    const result = await GetMovieDetails(movieId);
    return {
      success: true,
      data: {
        id: result.id,
        title: result.title,
        overview: result.overview,
        poster_path: result.poster_path,
        release_date: result.release_date,
        vote_average: result.vote_average,
        runtime: result.runtime,
        genres: result.genres,
        credits: result.credits,
        similar: result.similar,
        videos: result.videos,
      },
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch movie details",
    };
  }
}

/**
 * Get detailed information about a TV show
 */
async function getTVDetails(tvId: number): Promise<TVDetailsResponse> {
  try {
    const result = await GetTVDetails(tvId);
    return {
      success: true,
      data: {
        id: result.id,
        name: result.name,
        overview: result.overview,
        poster_path: result.poster_path,
        first_air_date: result.first_air_date,
        vote_average: result.vote_average,
        number_of_seasons: result.number_of_seasons,
        number_of_episodes: result.number_of_episodes,
        genres: result.genres,
        credits: result.credits,
        similar: result.similar,
        videos: result.videos,
      },
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to fetch TV details",
    };
  }
}

/**
 * Get detailed information about a person
 */
async function getPersonDetails(
  personId: number,
): Promise<PersonDetailsResponse> {
  try {
    const result = await GetPersonDetails(personId);
    return {
      success: true,
      data: {
        id: result.id,
        name: result.name,
        profile_path: result.profile_path,
        biography: result.biography,
        birthday: result.birthday,
        place_of_birth: result.place_of_birth,
        popularity: result.popularity,
        known_for_department: result.known_for_department,
        combined_credits: result.combined_credits,
      },
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch person details",
    };
  }
}

/**
 * Get movies similar to a given movie
 */
async function getSimilarMovies(movieId: number): Promise<SimilarResponse> {
  try {
    const result = await GetSimilarMovie(movieId, 1);
    return {
      success: true,
      results: result.results,
      count: result.results.length,
    };
  } catch (error) {
    return {
      success: false,
      results: [],
      count: 0,
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch similar movies",
    };
  }
}

/**
 * Get TV shows similar to a given TV show
 */
async function getSimilarTV(tvId: number): Promise<SimilarResponse> {
  try {
    const result = await GetSimilarTV(tvId, 1);
    return {
      success: true,
      results: result.results,
      count: result.results.length,
    };
  } catch (error) {
    return {
      success: false,
      results: [],
      count: 0,
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch similar TV shows",
    };
  }
}

/**
 * Get trending content
 */
async function getTrending(type: string): Promise<BrowseResponse> {
  try {
    const result = await GetTrending(type, 1);
    return {
      success: true,
      results: result.results,
      count: result.results.length,
      type,
    };
  } catch (error) {
    return {
      success: false,
      results: [],
      count: 0,
      type,
      error:
        error instanceof Error ? error.message : "Failed to fetch trending",
    };
  }
}

/**
 * Get popular movies or TV shows
 */
async function getPopular(type: string): Promise<BrowseResponse> {
  try {
    let result;
    if (type === "movie") {
      result = await GetPopularMovie(1);
    } else if (type === "tv") {
      result = await GetPopularTV(1);
    } else {
      throw new Error("Invalid popular type");
    }
    return {
      success: true,
      results: result.results,
      count: result.results.length,
      type,
    };
  } catch (error) {
    return {
      success: false,
      results: [],
      count: 0,
      type,
      error: error instanceof Error ? error.message : "Failed to fetch popular",
    };
  }
}

/**
 * Get latest/now playing movies
 */
async function getLatestMovies(): Promise<BrowseResponse> {
  try {
    const result = await GetLatestMovie(1);
    return {
      success: true,
      results: result.results,
      count: result.results.length,
      type: "movie",
    };
  } catch (error) {
    return {
      success: false,
      results: [],
      count: 0,
      type: "movie",
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch latest movies",
    };
  }
}

/**
 * Get latest/on-air TV shows
 */
async function getLatestTV(): Promise<BrowseResponse> {
  try {
    const result = await GetLatestTV(1);
    return {
      success: true,
      results: result.results,
      count: result.results.length,
      type: "tv",
    };
  } catch (error) {
    return {
      success: false,
      results: [],
      count: 0,
      type: "tv",
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch latest TV shows",
    };
  }
}

/**
 * Get upcoming movies
 */
async function getUpcomingMovies(): Promise<BrowseResponse> {
  try {
    const result = await GetUpcomingMovie(1);
    return {
      success: true,
      results: result.results,
      count: result.results.length,
      type: "movie",
    };
  } catch (error) {
    return {
      success: false,
      results: [],
      count: 0,
      type: "movie",
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch upcoming movies",
    };
  }
}
