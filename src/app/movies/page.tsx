import React from "react";
import styles from "./movies.module.scss";
import { FetchPopularMovie } from "@/lib/apis";
import { TransformPopularData } from "@/lib/utils";
import { GetPopularMovie } from "@/lib/actions";
import PaginatedCards from "@/components/ui/paginated-cards";

const Movies = async ({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const searchParams = await searchParamsPromise;
  const page = Number(searchParams?.page) || 1;

  const initialPopularDataReponse = await FetchPopularMovie(page);
  const initialTotal = initialPopularDataReponse.total_results;
  const initialDataCount = initialPopularDataReponse.results.length;
  const initialPopularData = TransformPopularData(
    initialPopularDataReponse,
    "movie"
  );

  return (
    <main className={styles.movies}>
      <PaginatedCards
        headerTitle="Popular Movies"
        initialPage={page}
        initialTotal={initialTotal}
        initialDataCount={initialDataCount}
        initialData={initialPopularData}
        mediaType="movie"
        showDataType="popular"
        GetData={GetPopularMovie}
      />
    </main>
  );
};

export default Movies;
