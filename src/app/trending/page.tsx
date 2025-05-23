import TrendingPage from "@/components/trending/trending-page";
import styles from "./trending.module.scss";
import { FetchTrending } from "@/lib/apis";
import { TransformTrendingData } from "@/lib/utils";
import { GetTrending } from "@/lib/actions";

const Trending = async ({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const searchParams = await searchParamsPromise;
  const tab = searchParams?.tab || "all";
  const page = Number(searchParams?.page) || 1;

  const initialTrendingDataReponse = await FetchTrending(tab, page);
  const initialTotal = initialTrendingDataReponse.total_results;
  const initialDataCount = initialTrendingDataReponse.results.length;
  const initialTrendingData = TransformTrendingData(initialTrendingDataReponse);

  return (
    <main className={styles.trending}>
      <TrendingPage
        initialTab={tab}
        initialPage={page}
        initialTotal={initialTotal}
        initialDataCount={initialDataCount}
        initialTrendingData={initialTrendingData}
        GetTrending={GetTrending}
      />
    </main>
  );
};

export default Trending;
