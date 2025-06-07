import { ShowType } from "@/types/types";
import styles from "./detail-section.module.scss";
import Image from "next/image";
import { MovieProjectorIcon, YellowStarIcon } from "@/lib/icons";

export type DetailSectionPropsType = {
  type: ShowType;
  title: string;
  imdb: number;
  imageSrc: string | null;
  description: string;
  releasedDate: string;
  duration?: number;
  seasons?: number;
  genre: string;
  country: string;
  budget?: string;
  networks?: string;
  production: string;
};

const DetailSection = (vm: DetailSectionPropsType) => {
  return (
    <div className={styles.detailSection}>
      <div className={styles.imageContainer}>
        {vm.imageSrc ? (
          <Image
            loading="lazy"
            fill
            src={vm.imageSrc}
            alt={`detail-image-${vm.title}`}
          />
        ) : (
          <div className={styles.placeholderImage}>
            <MovieProjectorIcon width={100} height={100} />
          </div>
        )}
      </div>
      <div className={styles.detailContent}>
        <div className={styles.detailHeader}>
          <div className={styles.title}>{vm.title}</div>
          {typeof vm.imdb === "number" && vm.imdb > 0 && (
            <div className={styles.imdb}>
              <YellowStarIcon />
              <span className={styles.rating}>{vm.imdb}</span>
              <span>/ 10</span>
            </div>
          )}
        </div>
        <div className={styles.description}>{vm.description}</div>
        <div className={styles.details}>
          {vm.releasedDate && (
            <div className={`${styles.releasedDate} ${styles.field}`}>
              <span className={styles.label}>Released:</span>
              <div className={styles.value}>{vm.releasedDate}</div>
            </div>
          )}
          {typeof vm.duration === "number" && vm.duration > 0 && (
            <div className={`${styles.duration} ${styles.field}`}>
              <span className={styles.label}>Duration:</span>
              <div className={styles.value}>{vm.duration} minutes</div>
            </div>
          )}
          {vm.seasons && (
            <div className={`${styles.seasons} ${styles.field}`}>
              <span className={styles.label}>Seasons:</span>
              <div className={styles.value}>{vm.seasons}</div>
            </div>
          )}
          {vm.genre && (
            <div className={`${styles.genre} ${styles.field}`}>
              <span className={styles.label}>Genre:</span>
              <div className={styles.value}>{vm.genre}</div>
            </div>
          )}
          {vm.country && (
            <div className={`${styles.country} ${styles.field}`}>
              <span className={styles.label}>Country:</span>
              <div className={styles.value}>{vm.country}</div>
            </div>
          )}
          {vm.budget && (
            <div className={`${styles.budget} ${styles.field}`}>
              <span className={styles.label}>Budget:</span>
              <div className={styles.value}>{vm.budget}</div>
            </div>
          )}
          {vm.networks && (
            <div className={`${styles.networks} ${styles.field}`}>
              <span className={styles.label}>Networks:</span>
              <div className={styles.value}>{vm.networks}</div>
            </div>
          )}
          {vm.production && (
            <div className={`${styles.production} ${styles.field}`}>
              <span className={styles.label}>Production:</span>
              <div className={styles.value}>{vm.production}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
