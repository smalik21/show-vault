import React from "react";
import styles from "./similar.module.scss";
import PaginatedCards from "@/components/ui/paginated-cards";
import { TransformDataResponse } from "@/lib/utils";
import { FetchSimilarTV } from "@/lib/apis";
import { GetSimilarTV } from "@/lib/actions";

const SimilarTVShows = async ({
  params: paramsPromise,
  searchParams: searchParamsPromise,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const params = await paramsPromise;
  const searchParams = await searchParamsPromise;

  const { id } = params;
  const page = Number(searchParams?.page) || 1;

  const initialDataReponse = await FetchSimilarTV(Number(id), page);
  const initialTotal = initialDataReponse.total_results;
  const initialDataCount = initialDataReponse.results.length;
  const initialData = TransformDataResponse(initialDataReponse, "tv");

  return (
    <main className={styles.similarMovies}>
      <PaginatedCards
        headerTitle="Similar TV Shows"
        initialPage={page}
        initialTotal={initialTotal}
        initialDataCount={initialDataCount}
        initialData={initialData}
        mediaType="tv"
        showDataType="popular"
        id={Number(id)}
        GetData={GetSimilarTV}
      />
    </main>
  );
};

export default SimilarTVShows;
