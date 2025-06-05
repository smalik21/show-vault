import { ShowType } from "@/types/types";
import styles from "./detail-section.module.scss";
import Image from "next/image";
import { YellowStarIcon } from "@/lib/icons";

export type DetailSectionPropsType = {
  type: ShowType;
  title: string;
  imdb: number;
  imageSrc: string;
  description: string;
  releasedDate: string;
  duration: number;
  genre: string;
  country: string;
  budget: number;
  production: string;
};

const DetailSection = (vm: DetailSectionPropsType) => {
  return (
    <div className={styles.detailSection}>
      <div className={styles.imageContainer}>
        <Image
          loading="lazy"
          fill
          src={vm.imageSrc}
          alt={`detail-image-${vm.title}`}
        />
      </div>
      <div className={styles.detailContent}>
        <div className={styles.detailHeader}>
          <div className={styles.title}>{vm.title}</div>
          <div className={styles.imdb}>
            <YellowStarIcon />
            <span className={styles.rating}>{vm.imdb}</span>
            <span>/ 10</span>
          </div>
        </div>
        <div className={styles.description}>{vm.description}</div>
        <div className={styles.details}>
          <div className={`${styles.releasedDate} ${styles.field}`}>
            <span className={styles.label}>Released:</span>
            <div className={styles.value}>{vm.releasedDate}</div>
          </div>
          <div className={`${styles.duration} ${styles.field}`}>
            <span className={styles.label}>Duration:</span>
            <div className={styles.value}>{vm.duration} minutes</div>
          </div>
          <div className={`${styles.genre} ${styles.field}`}>
            <span className={styles.label}>Genre:</span>
            <div className={styles.value}>{vm.genre}</div>
          </div>
          <div className={`${styles.country} ${styles.field}`}>
            <span className={styles.label}>Country:</span>
            <div className={styles.value}>{vm.country}</div>
          </div>
          <div className={`${styles.budget} ${styles.field}`}>
            <span className={styles.label}>Budget:</span>
            <div className={styles.value}>{vm.budget}</div>
          </div>
          <div className={`${styles.production} ${styles.field}`}>
            <span className={styles.label}>Production:</span>
            <div className={styles.value}>{vm.production}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
