import React from "react";
import styles from "./similar.module.scss";
import { FetchSimilarMovie } from "@/lib/apis";
import { GetSimilarMovie } from "@/lib/actions";
import PaginatedCards from "@/components/ui/paginated-cards";
import { TransformDataResponse } from "@/lib/utils";

const SimilarMovies = async ({
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

  const initialDataReponse = await FetchSimilarMovie(Number(id), page);
  const initialTotal = initialDataReponse.total_results;
  const initialDataCount = initialDataReponse.results.length;
  const initialData = TransformDataResponse(initialDataReponse, "movie");

  return (
    <main className={styles.similarMovies}>
      <PaginatedCards
        headerTitle="Similar Movies"
        initialPage={page}
        initialTotal={initialTotal}
        initialDataCount={initialDataCount}
        initialData={initialData}
        mediaType="movie"
        showDataType="popular"
        id={Number(id)}
        GetData={GetSimilarMovie}
      />
    </main>
  );
};

export default SimilarMovies;
