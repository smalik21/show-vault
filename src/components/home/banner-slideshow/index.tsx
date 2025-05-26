import React from "react";
import styles from "./banner-slideshow.module.scss";
import { Carousel } from "antd";
import BannerItem from "./banner-item";
import { BannerItemPropsType } from "@/types/propTypes";
import { FetchTrending } from "@/lib/apis";
import { TransformBannerData } from "@/lib/utils";

const BannerSlideshow = async () => {
  const trendingData = await FetchTrending();
  const bannerItems = TransformBannerData(trendingData).slice(0, 5);

  return (
    <div className={styles.bannerSlideshow}>
      <Carousel
        id="home-banner-carousel"
        autoplay={{ dotDuration: true }}
        autoplaySpeed={3000}
        arrows
        draggable
      >
        {bannerItems.map((bannerItem: BannerItemPropsType, idx) => {
          return (
            <div key={`${idx}-banner-item-${bannerItem.title}`}>
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
