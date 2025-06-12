import React from "react";
import styles from "./movie-details.module.scss";
import { FetchMovieDetails } from "@/lib/apis";
import {
  GetVideoUrl,
  TransformDataResponse,
  TransformMovieDetailsData,
} from "@/lib/utils";
import DetailSection from "@/components/ui/detail-section";
import CastSection from "@/components/ui/cast-section";
import SectionHeader from "@/components/ui/section-header";
import CardsContainer from "@/components/ui/cards-container";

const MovieDetails = async ({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) => {
  const params = await paramsPromise;
  const { id } = params;

  const movieDetailsResponse = await FetchMovieDetails(id);

  const { videoKey, detailSection, cast, similarMovies } =
    TransformMovieDetailsData(movieDetailsResponse);

  const videoUrl = GetVideoUrl(videoKey);

  const similarMoviesData = TransformDataResponse(similarMovies, "movie");

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
      <section className={styles.detailSection}>
        <DetailSection {...detailSection} />
      </section>
      <section className={styles.castSection}>
        <CastSection cast={cast} />
      </section>
      <section className={styles.similarSection}>
        <SectionHeader
          title="You May Also Like"
          link={`/movies/${id}/similar`}
          viewAllBtn
        ></SectionHeader>
        <CardsContainer cardList={similarMoviesData} />
      </section>
    </main>
  );
};

export default MovieDetails;
