import React from "react";
import styles from "./latest.module.scss";
import PaginatedCards from "@/components/ui/paginated-cards";
import { FetchLatestMovie } from "@/lib/apis";
import { TransformLatestData } from "@/lib/utils";
import { GetLatestMovie } from "@/lib/actions";

const LatestMovies = async ({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const searchParams = await searchParamsPromise;
  const page = Number(searchParams?.page) || 1;

  const initialLatestDataReponse = await FetchLatestMovie(page);
  const initialTotal = initialLatestDataReponse.total_results;
  const initialDataCount = initialLatestDataReponse.results.length;
  const initialLatestData = TransformLatestData(
    initialLatestDataReponse,
    "movie"
  );

  return (
    <main className={styles.latestMovies}>
      <PaginatedCards
        headerTitle="Latest Movies"
        initialPage={page}
        initialTotal={initialTotal}
        initialDataCount={initialDataCount}
        initialData={initialLatestData}
        mediaType="movie"
        showDataType="latest"
        GetData={GetLatestMovie}
      />
    </main>
  );
};

export default LatestMovies;
