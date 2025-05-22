"use client";

import React, { useCallback, useState } from "react";

import styles from "./trending-section.module.scss";
import SectionHeader from "@/components/ui/section-header";
import RadioButtons from "@/components/ui/radio-buttons";
import { TRENDING_TYPES } from "@/lib/constants";
import Button from "@/components/ui/button";
import CardItem from "@/components/ui/card-item";
import { Carousel } from "antd";
import { CardPropsType, TrendingSectionPropsType } from "@/types/propTypes";
import { TransformTrendingData } from "@/lib/utils";
import { useRouter } from "next/navigation";

const TrendingSection = ({
  initialTrendingData,
  GetTrending,
}: TrendingSectionPropsType) => {
  const router = useRouter();

  const [selectedTrendingType, setSelectedTrendingType] =
    useState<string>("all");
  const [trendingData, setTrendingData] =
    useState<CardPropsType[]>(initialTrendingData);

  const fetchTrendingData = useCallback(
    async (type: string) => {
      const data = await GetTrending(type);
      setTrendingData(TransformTrendingData(data));
    },
    [GetTrending]
  );

  const handleTabChange = (type: string) => {
    setSelectedTrendingType(type);
    fetchTrendingData(type);
  };

  const handleViewAllClick = () => {
    router.push("/trending");
  };

  return (
    <div className={styles.trendingSection}>
      <SectionHeader title="Trending">
        <div className={styles.toggleTypeButtons}>
          <RadioButtons
            selectedValue={selectedTrendingType}
            setSelectedValue={handleTabChange}
            options={TRENDING_TYPES}
            padding="sm"
            textColor="white"
            textSize="lg"
            bgColor="slate"
            highlightColor="orange"
            borderRadius="md"
            fontWeight={200}
          />
        </div>
        <div className={styles.viewAllButton}>
          <Button textColor="gray" textSize="lg" onClick={handleViewAllClick}>
            View All
          </Button>
        </div>
      </SectionHeader>
      <div className={styles.trendingContent}>
        <Carousel
          id="trending-section-carousel"
          className={styles.carousel}
          slidesToScroll={6}
          arrows
          draggable
          variableWidth
          dots={false}
          responsive={[
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                variableWidth: false,
              },
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                variableWidth: false,
              },
            },
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                variableWidth: false,
              },
            },
            {
              breakpoint: 756,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                variableWidth: false,
              },
            },
          ]}
        >
          {trendingData.map((item, idx) => (
            <CardItem
              key={`${idx}-card-item-${item.title}`}
              imageSrc={item.imageSrc}
              title={item.title}
              releaseYear={item.releaseYear}
              imdb={item.imdb}
              showType={item.showType}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TrendingSection;
