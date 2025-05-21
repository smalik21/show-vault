import TrendingPage from "@/components/trending/trending-page";
import styles from "./trending.module.scss";
import { FetchTrending } from "@/lib/apis";
import { TransformTrendingData } from "@/lib/utils";

const Trending = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const tab = searchParams?.tab || "all";
  const page = Number(searchParams?.page) || 1;

  const initialTrendingDataReponse = await FetchTrending(tab, page);
  const initialTotal = initialTrendingDataReponse.total_results;
  const initialTrendingData = TransformTrendingData(initialTrendingDataReponse);

  return (
    <main className={styles.trending}>
      <TrendingPage
        initialTab={tab}
        initialPage={page}
        initialTotal={initialTotal}
        initialTrendingData={initialTrendingData}
      />
    </main>
  );
};

export default Trending;
