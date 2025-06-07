"use client";

import { CardPropsType } from "@/types/propTypes";
import Image from "next/image";
import React from "react";
import styles from "./card-item.module.scss";
import { MovieProjectorIcon, YellowStarIcon } from "@/lib/icons";
import { useRouter } from "next/navigation";

const CardItem = (vm: CardPropsType) => {
  const router = useRouter();

  const handleCardItemClick = (id: number) => {
    const route = vm.showType === "movie" ? "movies" : "tv-shows";
    router.push(`/${route}/${id}`);
  };

  return (
    <article
      className={styles.cardItem}
      onClick={() => handleCardItemClick(vm.id)}
    >
      <header className={styles.imageContainer}>
        {vm.imageSrc ? (
          <Image
            loading="lazy"
            fill
            src={vm.imageSrc}
            alt={`card-image-${vm.title}`}
          />
        ) : (
          <div className={styles.placeholderImage}>
            <MovieProjectorIcon width={100} height={100} />
          </div>
        )}
      </header>
      <section className={styles.cardContent}>
        <div className={styles.title}>{vm.title}</div>
        <div className={styles.cardDetails}>
          <span className={styles.releaseYear}>{vm.releaseYear}</span>
          {typeof vm.imdb === "number" && vm.imdb > 0 && (
            <span className={styles.imdb}>
              <YellowStarIcon width={13} height={12} />
              <span>{vm.imdb}</span>
            </span>
          )}
          <span className={styles.showType}>
            {vm.showType === "movie" ? "Movie" : "TV"}
          </span>
        </div>
      </section>
    </article>
  );
};

export default CardItem;
