import {
  ToolResponseType,
  SearchResponse,
  SearchPeopleResponse,
  SearchMultiResponse,
  BrowseResponse,
  MovieDetailsResponse,
  TVDetailsResponse,
  PersonDetailsResponse,
  SimilarResponse,
} from "@/types/chat";
import { DataItemType, PersonType } from "@/types/types";

/**
 * Format search/browse results into readable text for chat display
 */
export function formatSearchResults(
  response: SearchResponse | SearchMultiResponse | BrowseResponse,
): string {
  if (!response.success) {
    return `❌ ${response.error || "Failed to fetch results"}`;
  }

  if (response.count === 0) {
    return "😔 No results found. Try a different search query.";
  }

  const results = response.results as DataItemType[];
  let output = `Found ${response.count} result${response.count !== 1 ? "s" : ""}:\n\n`;

  results.slice(0, 10).forEach((item, index) => {
    const title = item.title || item.name || "Unknown";
    const releaseDate = item.release_date || item.first_air_date;
    const rating = item.vote_average
      ? `⭐ ${item.vote_average.toFixed(1)}/10`
      : "";
    const overview =
      item.overview && item.overview.length > 100
        ? item.overview.substring(0, 100) + "..."
        : item.overview;

    output += `${index + 1}. **${title}** (ID: ${item.id})\n`;
    if (releaseDate) output += `   📅 ${releaseDate}\n`;
    if (rating) output += `   ${rating}\n`;
    if (overview) output += `   📝 ${overview}\n`;
    output += "\n";
  });

  if (response.count > 10) {
    output += `... and ${response.count - 10} more results`;
  }

  return output;
}

/**
 * Format people search results
 */
export function formatPeopleResults(response: SearchPeopleResponse): string {
  if (!response.success) {
    return `❌ ${response.error || "Failed to fetch people"}`;
  }

  if (response.count === 0) {
    return "😔 No people found. Try a different search.";
  }

  const people = response.results as PersonType[];
  let output = `Found ${response.count} person${response.count !== 1 ? "s" : ""}:\n\n`;

  people.slice(0, 10).forEach((person, index) => {
    const name = person.name;
    const department = person.known_for_department || "Entertainment";
    const popularity = person.popularity
      ? `📊 Popularity: ${person.popularity.toFixed(1)}`
      : "";

    output += `${index + 1}. **${name}** (ID: ${person.id})\n`;
    output += `   👤 ${department}\n`;
    if (popularity) output += `   ${popularity}\n`;
    output += "\n";
  });

  if (response.count > 10) {
    output += `... and ${response.count - 10} more people`;
  }

  return output;
}

/**
 * Format detailed movie information
 */
export function formatMovieDetails(response: MovieDetailsResponse): string {
  if (!response.success || !response.data) {
    return `❌ ${response.error || "Failed to load movie details"}`;
  }

  const m = response.data;
  let output = `🎬 **${m.title}**\n\n`;

  output += `🆔 ID: ${m.id}\n`;
  if (m.release_date) output += `📅 Release Date: ${m.release_date}\n`;
  if (m.runtime) output += `⏱️ Runtime: ${m.runtime} minutes\n`;
  if (m.vote_average) output += `⭐ Rating: ${m.vote_average.toFixed(1)}/10\n`;

  if (m.genres && m.genres.length > 0) {
    output += `🏷️ Genres: ${m.genres.map((g) => g.name).join(", ")}\n`;
  }

  output += `\n📝 Overview:\n${m.overview}\n`;

  if (m.credits?.cast && m.credits.cast.length > 0) {
    output += `\n👥 Cast:\n`;
    m.credits.cast.slice(0, 5).forEach((actor) => {
      output += `• ${actor.name}${actor.character ? ` as ${actor.character}` : ""}\n`;
    });
    if (m.credits.cast.length > 5) {
      output += `• ... and ${m.credits.cast.length - 5} more\n`;
    }
  }

  if (m.videos?.results && m.videos.results.length > 0) {
    output += `\n🎥 Videos: ${m.videos.results.length} available (trailers, clips, etc.)\n`;
  }

  if (m.similar?.results && m.similar.results.length > 0) {
    output += `\n🔗 **Similar Movies Available:** ${m.similar.results.length} found\n`;
    output += `You can ask me to show similar movies!\n`;
  }

  return output;
}

/**
 * Format detailed TV show information
 */
export function formatTVDetails(response: TVDetailsResponse): string {
  if (!response.success || !response.data) {
    return `❌ ${response.error || "Failed to load TV show details"}`;
  }

  const tv = response.data;
  let output = `📺 **${tv.name}**\n\n`;

  output += `🆔 ID: ${tv.id}\n`;
  if (tv.first_air_date) output += `📅 First Air Date: ${tv.first_air_date}\n`;
  if (tv.number_of_seasons) output += `📚 Seasons: ${tv.number_of_seasons}\n`;
  if (tv.number_of_episodes)
    output += `📺 Episodes: ${tv.number_of_episodes}\n`;
  if (tv.vote_average)
    output += `⭐ Rating: ${tv.vote_average.toFixed(1)}/10\n`;

  if (tv.genres && tv.genres.length > 0) {
    output += `🏷️ Genres: ${tv.genres.map((g) => g.name).join(", ")}\n`;
  }

  output += `\n📝 Overview:\n${tv.overview}\n`;

  if (tv.credits?.cast && tv.credits.cast.length > 0) {
    output += `\n👥 Cast:\n`;
    tv.credits.cast.slice(0, 5).forEach((actor) => {
      output += `• ${actor.name}${actor.character ? ` as ${actor.character}` : ""}\n`;
    });
    if (tv.credits.cast.length > 5) {
      output += `• ... and ${tv.credits.cast.length - 5} more\n`;
    }
  }

  if (tv.videos?.results && tv.videos.results.length > 0) {
    output += `\n🎥 Videos: ${tv.videos.results.length} available\n`;
  }

  if (tv.similar?.results && tv.similar.results.length > 0) {
    output += `\n🔗 **Similar Shows Available:** ${tv.similar.results.length} found\n`;
    output += `You can ask me to show similar TV shows!\n`;
  }

  return output;
}

/**
 * Format person details
 */
export function formatPersonDetails(response: PersonDetailsResponse): string {
  if (!response.success || !response.data) {
    return `❌ ${response.error || "Failed to load person details"}`;
  }

  const person = response.data;
  let output = `👤 **${person.name}**\n\n`;

  output += `🆔 ID: ${person.id}\n`;
  if (person.known_for_department)
    output += `🎭 Department: ${person.known_for_department}\n`;
  if (person.birthday) output += `🎂 Birthday: ${person.birthday}\n`;
  if (person.place_of_birth)
    output += `📍 Place of Birth: ${person.place_of_birth}\n`;
  if (person.popularity)
    output += `📊 Popularity: ${person.popularity.toFixed(1)}\n`;

  output += `\n📝 Biography:\n${person.biography || "No biography available"}\n`;

  if (
    person.combined_credits?.cast &&
    person.combined_credits.cast.length > 0
  ) {
    output += `\n🎬 Known For:\n`;
    person.combined_credits.cast
      .slice(0, 10)
      .forEach(
        (work: { title?: string; name?: string; character?: string }) => {
          const title = work.title || work.name || "Unknown";
          const character = work.character || "";
          output += `• ${title}${character ? ` as ${character}` : ""}\n`;
        },
      );
    if (person.combined_credits.cast.length > 10) {
      output += `• ... and ${person.combined_credits.cast.length - 10} more roles\n`;
    }
  }

  return output;
}

/**
 * Format similar items response
 */
export function formatSimilarResults(response: SimilarResponse): string {
  if (!response.success) {
    return `❌ ${response.error || "Failed to load similar items"}`;
  }

  if (response.count === 0) {
    return "😔 No similar items found.";
  }

  const results = response.results as DataItemType[];
  let output = `Found ${response.count} similar item${response.count !== 1 ? "s" : ""}:\n\n`;

  results.slice(0, 10).forEach((item, index) => {
    const title = item.title || item.name || "Unknown";
    const rating = item.vote_average
      ? `⭐ ${item.vote_average.toFixed(1)}/10`
      : "";

    output += `${index + 1}. **${title}** (ID: ${item.id})\n`;
    if (rating) output += `   ${rating}\n`;
    output += "\n";
  });

  if (response.count > 10) {
    output += `... and ${response.count - 10} more similar items`;
  }

  return output;
}

/**
 * Main formatter that handles all response types
 */
export function formatToolResponse(response: ToolResponseType): string {
  // Handle navigation separately (should not be formatted as text)
  if ("type" in response && response.type === "navigate") {
    return "";
  }

  // Search results
  if ("results" in response && "count" in response && "success" in response) {
    const res = response as
      | SearchResponse
      | SearchPeopleResponse
      | SearchMultiResponse
      | BrowseResponse;

    // Check if it's people search by looking at first result
    if (
      res.results &&
      res.results.length > 0 &&
      "known_for_department" in res.results[0]
    ) {
      return formatPeopleResults(res as SearchPeopleResponse);
    }
    // Regular browse/search results
    return formatSearchResults(
      res as SearchResponse | SearchMultiResponse | BrowseResponse,
    );
  }

  // Movie, TV, or Person details
  if ("data" in response && response.data !== undefined) {
    const detailRes = response as
      | MovieDetailsResponse
      | TVDetailsResponse
      | PersonDetailsResponse;
    const data = detailRes.data;

    if (data && "title" in data) {
      return formatMovieDetails(response as MovieDetailsResponse);
    }

    // TV details
    if (data && "name" in data) {
      return formatTVDetails(response as TVDetailsResponse);
    }

    // Person details
    if (data && "biography" in data) {
      return formatPersonDetails(response as PersonDetailsResponse);
    }
  }

  return "✅ Request completed successfully";
}
