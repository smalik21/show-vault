import Image from "next/image";
import React from "react";
import styles from "./banner-item.module.scss";
import { BannerItemType } from "@/types/propTypes";
import Button from "@/components/ui/button";
import { YellowStarIcon } from "@/lib/icons";

const BannerItem = (vm: BannerItemType) => {
  return (
    <div className={styles.bannerItem}>
      <div className={styles.itemContent}>
        <div className={styles.itemInfo}>
          <div className={styles.itemImdb}>
            <span className={styles.icon}>
              <YellowStarIcon />
            </span>
            <span className={styles.rating}>{vm.imdb}</span>
          </div>
          <div className={styles.itemGenre}>
            {vm.genre.map((item: string, index: number) => {
              return (
                <span
                  key={`banner-item-genre-${index}`}
                  className={styles.genre}
                >
                  {item}
                  {index < vm.genre.length - 1 && (
                    <span className={styles.dot}>·</span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
        <div className={styles.itemTitle}>{vm.title}</div>
        <div className={styles.itemDescription}>{vm.description}</div>
        <div className={styles.actionButtons}>
          <Button
            textColor="white"
            bgColor="orange"
            padding="md"
            textSize="sm"
            borderRadius="full"
          >
            WATCH TRAILER
          </Button>
          <Button
            textColor="white"
            bgColor="dark"
            padding="md"
            textSize="sm"
            borderRadius="full"
          >
            ADD TO WATCHLIST
          </Button>
        </div>
      </div>
      <Image
        className={styles.bannerImage}
        height={100}
        width={200}
        priority
        src={vm.imageSrc}
        alt={`banner-item-${vm.title}`}
      />
    </div>
  );
};

export default BannerItem;
