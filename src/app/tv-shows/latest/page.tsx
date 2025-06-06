import React from "react";
import styles from "./latest.module.scss";
import PaginatedCards from "@/components/ui/paginated-cards";
import { TransformDataResponse } from "@/lib/utils";
import { FetchLatestTV } from "@/lib/apis";
import { GetLatestTV } from "@/lib/actions";

const LatestTVShows = async ({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const searchParams = await searchParamsPromise;
  const page = Number(searchParams?.page) || 1;

  const initialLatestDataReponse = await FetchLatestTV(page);
  const initialTotal = initialLatestDataReponse.total_results;
  const initialDataCount = initialLatestDataReponse.results.length;
  const initialLatestData = TransformDataResponse(
    initialLatestDataReponse,
    "tv"
  );

  return (
    <main className={styles.latestTVShows}>
      <PaginatedCards
        headerTitle="Latest TV Shows"
        initialPage={page}
        initialTotal={initialTotal}
        initialDataCount={initialDataCount}
        initialData={initialLatestData}
        mediaType="tv"
        showDataType="latest"
        GetData={GetLatestTV}
      />
    </main>
  );
};

export default LatestTVShows;
