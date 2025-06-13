"use client";

import { CardPropsType } from "@/types/propTypes";
import Image from "next/image";
import React from "react";
import styles from "./card-item.module.scss";
import { MovieProjectorIcon, YellowStarIcon } from "@/lib/icons";
import Link from "next/link";

const CardItem = (vm: CardPropsType) => {
  const getMediaType = () => {
    switch (vm.showType) {
      case "movie":
        return "Movie";
      case "tv":
        return "TV";
      case "person":
        return "Person";
      default:
        return "Unknown";
    }
  };

  const getMediaRoute = () => {
    switch (vm.showType) {
      case "movie":
        return "movies";
      case "tv":
        return "tv-shows";
      case "person":
        return "people";
      default:
        return "unknown";
    }
  };

  return (
    <Link className={styles.cardItem} href={`/${getMediaRoute()}/${vm.id}`}>
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
          <span className={styles.showType}>{getMediaType()}</span>
        </div>
      </section>
    </Link>
  );
};

export default CardItem;
