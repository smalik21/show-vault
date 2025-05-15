import { CardPropsType } from "@/types/propTypes";
import Image from "next/image";
import React from "react";
import styles from "./card-item.module.scss";
import { YellowStarIcon } from "@/lib/icons";

const CardItem = ({
  title,
  releaseYear,
  imageSrc,
  imdb,
  showType,
}: CardPropsType) => {
  return (
    <article className={styles.cardItem}>
      <header className={styles.imageContainer}>
        <Image fill src={imageSrc} alt={`card-image-${title}`} />
      </header>
      <section className={styles.cardContent}>
        <div className={styles.title}>{title}</div>
        <div className={styles.cardDetails}>
          <span className={styles.releaseYear}>{releaseYear}</span>
          <span className={styles.imdb}>
            <YellowStarIcon width={13} height={12} />
            <span>{imdb}</span>
          </span>
          <span className={styles.showType}>
            {showType === "movie" ? "Movie" : "TV"}
          </span>
        </div>
      </section>
    </article>
  );
};

export default CardItem;
