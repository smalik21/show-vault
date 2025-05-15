import React from "react";
import styles from "./banner-slideshow.module.scss";
import { Carousel } from "antd";
import { BANNER_ITEMS } from "@/lib/sampleData";
import BannerItem from "./banner-item";
import { BannerItemType } from "@/types/propTypes";

const BannerSlideshow = () => {
  return (
    <div className={styles.bannerSlideshow}>
      <Carousel
        id="home-banner-carousel"
        autoplay={{ dotDuration: true }}
        autoplaySpeed={3000}
        arrows
        draggable
      >
        {BANNER_ITEMS.map((bannerItem: BannerItemType) => {
          return (
            <div key={`banner-item-${bannerItem.title}`}>
              <BannerItem
                title={bannerItem.title}
                description={bannerItem.description}
                imageSrc={bannerItem.imageSrc}
                genre={bannerItem.genre}
                imdb={bannerItem.imdb}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default BannerSlideshow;
