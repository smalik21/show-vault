import React from "react";
import styles from "./banner-slideshow.module.scss";
import { Carousel } from "antd";
import BannerItem, { BannerItemPropsType } from "./banner-item";

export type BannerSlideshowPropsType = {
  initialBannerSlideshowData: BannerItemPropsType[];
};

const BannerSlideshow = (vm: BannerSlideshowPropsType) => {
  return (
    <div className={styles.bannerSlideshow}>
      <Carousel
        id="home-banner-carousel"
        autoplay={{ dotDuration: true }}
        autoplaySpeed={3000}
        arrows
        draggable
      >
        {vm.initialBannerSlideshowData.map(
          (bannerItem: BannerItemPropsType, idx) => {
            return (
              <div key={`${idx}-banner-item-${bannerItem.id}`}>
                <BannerItem
                  id={bannerItem.id}
                  title={bannerItem.title}
                  description={bannerItem.description}
                  imageSrc={bannerItem.imageSrc}
                  genre={bannerItem.genre}
                  imdb={bannerItem.imdb}
                  showType={bannerItem.showType}
                />
              </div>
            );
          }
        )}
      </Carousel>
    </div>
  );
};

export default BannerSlideshow;
