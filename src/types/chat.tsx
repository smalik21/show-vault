import { DataItemType, DataResponseType, PersonType } from "./types";

// ============================================================================
// TOOL ARGUMENT TYPES
// ============================================================================

// Search Arguments
export interface SearchMoviesArgs {
  query: string;
}

export interface SearchTVArgs {
  query: string;
}

export interface SearchPeopleArgs {
  query: string;
}

export interface SearchMultiArgs {
  query: string;
}

// Browse Arguments
export interface GetTrendingArgs {
  type: "movie" | "tv" | "all";
}

export interface GetPopularArgs {
  type: "movie" | "tv";
}

// Details Arguments (by ID)
export interface GetMovieDetailsArgs {
  movieId: number;
}

export interface GetTVDetailsArgs {
  tvId: number;
}

export interface GetPersonDetailsArgs {
  personId: number;
}

// Similar Items Arguments
export interface GetSimilarMoviesArgs {
  movieId: number;
}

export interface GetSimilarTVArgs {
  tvId: number;
}

// Navigation Arguments
export interface NavigateToArgs {
  route: string;
}

export type ToolArgsType =
  | SearchMoviesArgs
  | SearchTVArgs
  | SearchPeopleArgs
  | SearchMultiArgs
  | GetTrendingArgs
  | GetPopularArgs
  | GetMovieDetailsArgs
  | GetTVDetailsArgs
  | GetPersonDetailsArgs
  | GetSimilarMoviesArgs
  | GetSimilarTVArgs
  | NavigateToArgs;

// ============================================================================
// TOOL NAMES
// ============================================================================

export type ToolName =
  // Search tools
  | "search_movies"
  | "search_tv"
  | "search_people"
  | "search_multi"
  // Browse tools
  | "get_trending"
  | "get_popular"
  | "get_latest_movies"
  | "get_latest_tv"
  | "get_upcoming_movies"
  // Details tools
  | "get_movie_details"
  | "get_tv_details"
  | "get_person_details"
  | "get_similar_movies"
  | "get_similar_tv"
  // Navigation
  | "navigate_to";

// ============================================================================
// TOOL RESPONSE TYPES
// ============================================================================

export interface SearchResponse {
  success: boolean;
  results: DataItemType[];
  count: number;
  error?: string;
}

export interface SearchPeopleResponse {
  success: boolean;
  results: PersonType[];
  count: number;
  error?: string;
}

export interface SearchMultiResponse {
  success: boolean;
  results: (DataItemType | PersonType)[];
  count: number;
  error?: string;
}

export interface BrowseResponse {
  success: boolean;
  results: DataItemType[];
  count: number;
  type?: string;
  error?: string;
}

export interface MovieDetailsResponse {
  success: boolean;
  data?: {
    id: number;
    title?: string;
    overview: string;
    poster_path?: string | null;
    release_date?: string;
    vote_average: number;
    runtime?: number;
    genres?: Array<{ id: number; name: string }>;
    credits?: {
      cast?: PersonType[];
    };
    similar?: DataResponseType;
    videos?: {
      results: Array<{
        key: string;
        name: string;
        type: string;
        site: string;
      }>;
    };
  };
  error?: string;
}

export interface TVDetailsResponse {
  success: boolean;
  data?: {
    id: number;
    name?: string;
    overview: string;
    poster_path?: string | null;
    first_air_date?: string;
    vote_average: number;
    number_of_seasons?: number;
    number_of_episodes?: number;
    genres?: Array<{ id: number; name: string }>;
    credits?: {
      cast?: PersonType[];
    };
    similar?: DataResponseType;
    videos?: {
      results: Array<{
        key: string;
        name: string;
        type: string;
        site: string;
      }>;
    };
  };
  error?: string;
}

export interface PersonDetailsResponse {
  success: boolean;
  data?: {
    id: number;
    name: string;
    profile_path?: string | null;
    biography: string;
    birthday?: string | null;
    place_of_birth?: string | null;
    popularity: number;
    known_for_department?: string;
    combined_credits?: {
      cast: DataItemType[];
      crew?: DataItemType[];
    };
  };
  error?: string;
}

export interface SimilarResponse {
  success: boolean;
  results: DataItemType[];
  count: number;
  error?: string;
}

export interface NavigateToResponse {
  type: "navigate";
  route: string;
}

export type ToolResponseType =
  | SearchResponse
  | SearchPeopleResponse
  | SearchMultiResponse
  | BrowseResponse
  | MovieDetailsResponse
  | TVDetailsResponse
  | PersonDetailsResponse
  | SimilarResponse
  | NavigateToResponse;

// ============================================================================
// AGENT & CHAT RESPONSE TYPES
// ============================================================================

export interface ToolCallResponse {
  tool: ToolName;
  arguments: ToolArgsType;
}

export interface TextResponse {
  text: string;
  final: boolean; // Indicates if this is the final answer to show the user
}

export type AgentResponseType = ToolCallResponse | TextResponse;

export interface ChatMessage {
  type: "user" | "assistant" | "tool";
  content: string;
  toolCall?: ToolCallResponse;
  toolResult?: ToolResponseType;
  timestamp?: number;
}

export interface AIActionResponse {
  type: "tool" | "text";
  tool?: ToolName;
  content?: string;
  data?: ToolResponseType;
  updatedContentDictionary?: Record<
    string,
    { id: number; type?: "movie" | "tv"; title: string }
  >;
  updatedLlmHistory?: ChatMessage[];
}
