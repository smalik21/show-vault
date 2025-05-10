"use client";

import React, { useState } from "react";

import styles from "./trending-section.module.scss";
import SectionHeader from "@/components/ui/section-header";
import RadioButtons from "@/components/ui/radio-buttons";
import { TRENDING_TYPES } from "@/lib/constants";
import Button from "@/components/ui/button";

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
    </div>
  );
};

export default TrendingSection;
