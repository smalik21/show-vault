import BannerSlideshow from "@/components/home/banner-slideshow";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.bannerSlideshow}>
        <BannerSlideshow />
      </section>
    </div>
  );
}
