"use client";

import React, { useState } from "react";

import styles from "./trending-section.module.scss";
import SectionHeader from "@/components/ui/section-header";
import RadioButtons from "@/components/ui/radio-buttons";
import { TRENDING_TYPES } from "@/lib/constants";
import Button from "@/components/ui/button";
import CardItem from "@/components/ui/card-item";
import { Carousel } from "antd";

const TrendingSection = () => {
  const [selectedTrendingType, setSelectedTrendingType] =
    useState<string>("all");

  return (
    <div className={styles.trendingSection}>
      <SectionHeader title="Trending">
        <div className={styles.toggleTypeButtons}>
          <RadioButtons
            selectedValue={selectedTrendingType}
            setSelectedValue={setSelectedTrendingType}
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
          <Button textColor="gray" textSize="lg">
            View All
          </Button>
        </div>
      </SectionHeader>
      <div className={styles.trendingContent}>
        {/* TODO: Add responsive object field */}
        <Carousel
          id="trending-section-carousel"
          className={styles.carousel}
          slidesToShow={4}
          slidesToScroll={4}
          arrows
          draggable
          variableWidth
          dots={false}
        >
          {Array.from({ length: 12 }).map((_, idx) => (
            <CardItem
              key={`card-item-${idx}`}
              imageSrc={`https://images.unsplash.com/photo-1576473318185-48d76fc03314?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              title={`Title ${idx + 1}`}
              releaseYear={2023 - idx}
              imdb={6.9}
              showType={idx % 2 === 0 ? "movie" : "show"}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TrendingSection;
