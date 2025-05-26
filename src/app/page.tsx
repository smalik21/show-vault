import styles from "./page.module.scss";
import BannerSlideshow from "@/components/home/banner-slideshow";
import TrendingSection from "@/components/home/trending-section";
import LatestMovies from "@/components/home/latest-movies";
import LatestShows from "@/components/home/latest-shows";
import ComingSoon from "@/components/home/coming-soon";
import { GetTrending } from "@/lib/actions";
import { FetchTrending } from "@/lib/apis";
import { TransformBannerData, TransformTrendingData } from "@/lib/utils";

const Home = async () => {
  const initialTrendingDataReponse = await FetchTrending();
  const initialTrendingData = TransformTrendingData(initialTrendingDataReponse);
  const initialBannerSlideshowData = TransformBannerData(
    initialTrendingDataReponse
  ).slice(0, 5);

  return (
    <main className={styles.home}>
      <section id="home-banner-slideshow" className={styles.bannerSlideshow}>
        <BannerSlideshow
          initialBannerSlideshowData={initialBannerSlideshowData}
        />
      </section>
      <section id="home-trending-section" className={styles.trending}>
        <TrendingSection
          initialTrendingData={initialTrendingData}
          GetTrending={GetTrending}
        />
      </section>
      <section id="latest-movies-section" className={styles.latestMovies}>
        <LatestMovies />
      </section>
      <section id="latest-shows-section" className={styles.latestShows}>
        <LatestShows />
      </section>
      <section id="coming-soon-section" className={styles.comingSoon}>
        <ComingSoon />
      </section>
    </main>
  );
};

export default Home;
