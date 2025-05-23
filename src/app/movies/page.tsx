import React from "react";
import styles from "./movies.module.scss";
import { FetchPopularMovie } from "@/lib/apis";
import { TransformPopularData } from "@/lib/utils";
import { GetPopularMovie } from "@/lib/actions";
import MoviesPage from "@/components/movies/movies-page";

const Movies = async ({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const searchParams = await searchParamsPromise;
  const page = Number(searchParams?.page) || 1;

  const initialPopularDataReponse = await FetchPopularMovie(page);
  const initialTotal = initialPopularDataReponse.total_results;
  const initialPopularData = TransformPopularData(
    initialPopularDataReponse,
    "movie"
  );

  return (
    <main className={styles.movies}>
      <MoviesPage
        initialPage={page}
        initialTotal={initialTotal}
        initialPopularData={initialPopularData}
        GetPopularMovie={GetPopularMovie}
      />
    </main>
  );
};

export default Movies;
