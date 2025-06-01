import React from "react";
import styles from "./movie-details.module.scss";
import { FetchMovieDetails } from "@/lib/apis";
import { GetVideoUrl, TransformMovieDetailsData } from "@/lib/utils";

const MovieDetails = async ({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) => {
  const params = await paramsPromise;
  const { id } = params;

  const movieDetailsResponse = await FetchMovieDetails(id);

  const videoKey = TransformMovieDetailsData(movieDetailsResponse);
  const videoUrl = GetVideoUrl(videoKey);

  return (
    <main className={styles.movieDetails}>
      {videoUrl && (
        <div className={styles.videoBackground}>
          <iframe
            className={styles.videoIframe}
            src={videoUrl.replace("watch?v=", "embed/")}
            title="Movie Trailer"
            allow="autoplay; encrypted-media"
            loading="lazy"
            allowFullScreen
          />
        </div>
      )}
      <div className={styles.exp}></div>
    </main>
  );
};

export default MovieDetails;
