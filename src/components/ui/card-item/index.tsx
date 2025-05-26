import { CardPropsType } from "@/types/propTypes";
import Image from "next/image";
import React from "react";
import styles from "./card-item.module.scss";
import { YellowStarIcon } from "@/lib/icons";

const CardItem = (vm: CardPropsType) => {
  return (
    <article className={styles.cardItem}>
      <header className={styles.imageContainer}>
        <Image
          loading="lazy"
          fill
          src={vm.imageSrc}
          alt={`card-image-${vm.title}`}
        />
      </header>
      <section className={styles.cardContent}>
        <div className={styles.title}>{vm.title}</div>
        <div className={styles.cardDetails}>
          <span className={styles.releaseYear}>{vm.releaseYear}</span>
          <span className={styles.imdb}>
            <YellowStarIcon width={13} height={12} />
            <span>{vm.imdb}</span>
          </span>
          <span className={styles.showType}>
            {vm.showType === "movie" ? "Movie" : "TV"}
          </span>
        </div>
      </section>
    </article>
  );
};

export default CardItem;
