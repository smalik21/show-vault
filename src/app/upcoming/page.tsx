import { FetchUpcomingMovie } from "@/lib/apis";
import styles from "./upcoming.module.scss";
import PaginatedCards from "@/components/ui/paginated-cards";
import { TransformDataResponse } from "@/lib/utils";
import { GetUpcomingMovie } from "@/lib/actions";

const Upcoming = async ({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const searchParams = await searchParamsPromise;
  const page = Number(searchParams?.page) || 1;

  const initialDataReponse = await FetchUpcomingMovie(page);
  const initialTotal = initialDataReponse.total_results;
  const initialDataCount = initialDataReponse.results.length;
  const initialData = TransformDataResponse(initialDataReponse, "movie");

  return (
    <main className={styles.upcoming}>
      <PaginatedCards
        headerTitle="Upcoming Movies"
        initialPage={page}
        initialTotal={initialTotal}
        initialDataCount={initialDataCount}
        initialData={initialData}
        mediaType="movie"
        showDataType="popular"
        GetData={GetUpcomingMovie}
      />
    </main>
  );
};

export default Upcoming;
