import React from "react";
import styles from "./tv-shows.module.scss";
import { FetchPopularTV } from "@/lib/apis";
import { TransformPopularData } from "@/lib/utils";
import { GetPopularTV } from "@/lib/actions";
import PaginatedCards from "@/components/ui/paginated-cards";

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
      <PaginatedCards
        headerTitle="Popular TV Shows"
        initialPage={page}
        initialTotal={initialTotal}
        initialDataCount={initialDataCount}
        initialData={initialPopularData}
        mediaType="tv"
        showDataType="popular"
        GetData={GetPopularTV}
      />
    </main>
  );
};

export default TVShows;
