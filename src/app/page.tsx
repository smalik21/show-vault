import BannerSlideshow from "@/components/home/banner-slideshow";
import styles from "./page.module.scss";
import TrendingSection from "@/components/home/trending-section";

export default function Home() {
  return (
    <div id="home-banner-slideshow" className={styles.home}>
      <section className={styles.bannerSlideshow}>
        <BannerSlideshow />
      </section>
      <section id="home-trending-section" className={styles.trending}>
        <TrendingSection />
      </section>
    </div>
  );
}
