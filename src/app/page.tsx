import styles from "./page.module.scss";
import BannerSlideshow from "@/components/home/banner-slideshow";
import TrendingSection from "@/components/home/trending-section";
import LatestMovies from "@/components/home/latest-movies";
import LatestShows from "@/components/home/latest-shows";
import ComingSoon from "@/components/home/coming-soon";
import { GetTrending } from "@/lib/actions";

export default function Home() {
  return (
    <main className={styles.home}>
      <section id="home-banner-slideshow" className={styles.bannerSlideshow}>
        <BannerSlideshow />
      </section>
      <section id="home-trending-section" className={styles.trending}>
        <TrendingSection GetTrending={GetTrending} />
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
}
