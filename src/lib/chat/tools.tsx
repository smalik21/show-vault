import { ToolName } from "@/types/chat";

interface ToolDefinition {
  name: ToolName;
  description: string;
  parameters: {
    type: "object";
    properties: Record<
      string,
      { type: string; description?: string; enum?: string[] }
    >;
    required: string[];
  };
}

export const tools: ToolDefinition[] = [
  // ===== SEARCH TOOLS =====
  {
    name: "search_movies",
    description:
      "Search for movies by title, actor, director, or keywords. Use this when user mentions a movie name or wants to find movies with specific criteria.",
    parameters: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description:
            "The search query (movie name, actor name, director, genre keywords, etc.)",
        },
      },
      required: ["query"],
    },
  },
  {
    name: "search_tv",
    description:
      "Search for TV shows by title, actor, or keywords. Use this when user mentions a TV show name or wants to find TV series.",
    parameters: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description:
            "The search query (TV show name, actor name, genre keywords, etc.)",
        },
      },
      required: ["query"],
    },
  },
  {
    name: "search_people",
    description:
      "Search for actors, directors, producers, and other entertainment professionals by name.",
    parameters: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The person's name or partial name to search for",
        },
      },
      required: ["query"],
    },
  },
  {
    name: "search_multi",
    description:
      "Search across all content types (movies, TV shows, and people) simultaneously. Use this for general searches or when user intent is unclear.",
    parameters: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The search query to find movies, TV shows, or people",
        },
      },
      required: ["query"],
    },
  },

  // ===== BROWSE TOOLS =====
  {
    name: "get_trending",
    description:
      "Get trending content this week. Use this when user wants to see what's currently popular or trending.",
    parameters: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["movie", "tv", "all"],
          description:
            "Type of trending content: 'movie' for movies only, 'tv' for TV shows only, 'all' for both",
        },
      },
      required: ["type"],
    },
  },
  {
    name: "get_popular",
    description:
      "Get the most popular movies or TV shows. Use this when user wants to find what's popular right now.",
    parameters: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["movie", "tv"],
          description:
            "Type of popular content: 'movie' for popular movies, 'tv' for popular TV shows",
        },
      },
      required: ["type"],
    },
  },
  {
    name: "get_latest_movies",
    description:
      "Get the latest movies that are currently or recently in theaters (now playing). Use this for recent movie releases.",
    parameters: {
      type: "object",
      properties: {},
      required: [],
    },
  },
  {
    name: "get_latest_tv",
    description:
      "Get the latest TV shows that are currently on the air. Use this to find currently airing TV series.",
    parameters: {
      type: "object",
      properties: {},
      required: [],
    },
  },
  {
    name: "get_upcoming_movies",
    description:
      "Get movies coming soon to theaters. Use this when user wants to see upcoming movie releases.",
    parameters: {
      type: "object",
      properties: {},
      required: [],
    },
  },

  // ===== DETAILS TOOLS =====
  {
    name: "get_movie_details",
    description:
      "Get comprehensive details about a specific movie including plot, cast, ratings, runtime, genres, videos, and similar movies. Requires the movie ID from a search result.",
    parameters: {
      type: "object",
      properties: {
        movieId: {
          type: "number",
          description:
            "The unique identifier of the movie (obtained from search results)",
        },
      },
      required: ["movieId"],
    },
  },
  {
    name: "get_tv_details",
    description:
      "Get comprehensive details about a specific TV show including plot, cast, number of seasons/episodes, genres, videos, and similar shows. Requires the TV show ID from a search result.",
    parameters: {
      type: "object",
      properties: {
        tvId: {
          type: "number",
          description:
            "The unique identifier of the TV show (obtained from search results)",
        },
      },
      required: ["tvId"],
    },
  },
  {
    name: "get_person_details",
    description:
      "Get detailed information about an entertainer including biography, filmography/TV work, birthday, birthplace, and popularity. Requires the person ID from a search result.",
    parameters: {
      type: "object",
      properties: {
        personId: {
          type: "number",
          description:
            "The unique identifier of the person (obtained from search results)",
        },
      },
      required: ["personId"],
    },
  },

  // ===== SIMILAR CONTENT TOOLS =====
  {
    name: "get_similar_movies",
    description:
      "Find movies similar to a given movie. Use this to find related movies based on genre, theme, and other factors.",
    parameters: {
      type: "object",
      properties: {
        movieId: {
          type: "number",
          description: "The ID of the movie to find similar movies for",
        },
      },
      required: ["movieId"],
    },
  },
  {
    name: "get_similar_tv",
    description:
      "Find TV shows similar to a given TV show. Use this to find related TV series based on genre, theme, and other factors.",
    parameters: {
      type: "object",
      properties: {
        tvId: {
          type: "number",
          description: "The ID of the TV show to find similar shows for",
        },
      },
      required: ["tvId"],
    },
  },

  // ===== NAVIGATION TOOL =====
  {
    name: "navigate_to",
    description:
      "Navigate the user to a specific page or route on the ShowVault website. Use this to direct users to different sections or with search parameters.",
    parameters: {
      type: "object",
      properties: {
        route: {
          type: "string",
          description:
            "The route path (e.g., '/movies', '/trending', '/search?q=action', '/movies/123', '/tv-shows', '/tv-shows/456')",
        },
      },
      required: ["route"],
    },
  },
];
