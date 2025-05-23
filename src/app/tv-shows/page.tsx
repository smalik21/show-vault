import React from "react";
import styles from "./tv-shows.module.scss";
import { FetchPopularTV } from "@/lib/apis";
import { TransformPopularData } from "@/lib/utils";
import { GetPopularTV } from "@/lib/actions";
import TvShowsPage from "@/components/tv-shows/tv-shows-page";

const TVShows = async ({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const searchParams = await searchParamsPromise;
  const page = Number(searchParams?.page) || 1;

  const initialPopularDataReponse = await FetchPopularTV(page);
  const initialTotal = initialPopularDataReponse.total_results;
  const initialDataCount = initialPopularDataReponse.results.length;
  const initialPopularData = TransformPopularData(
    initialPopularDataReponse,
    "tv"
  );

  return (
    <main className={styles.tvShows}>
      <TvShowsPage
        initialPage={page}
        initialTotal={initialTotal}
        initialDataCount={initialDataCount}
        initialPopularData={initialPopularData}
        GetPopularTV={GetPopularTV}
      />
    </main>
  );
};

export default TVShows;
