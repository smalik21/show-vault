"use client";

import React, { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./trending-page.module.scss";
import CardItem from "@/components/ui/card-item";
import CardsContainer from "@/components/ui/cards-container";
import RadioButtons from "@/components/ui/radio-buttons";
import SectionHeader from "@/components/ui/section-header";
import { TransformTrendingData } from "@/lib/utils";
import { CardPropsType, TrendingPagePropsType } from "@/types/propTypes";
import { Pagination } from "antd";
import { TRENDING_TYPES } from "@/lib/constants";

const TrendingPage = ({
  initialTab,
  initialPage,
  initialTotal,
  initialDataCount,
  initialTrendingData,
  GetTrending,
}: TrendingPagePropsType) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedTab, setSelectedTab] = useState<string>(initialTab);
  const [pageNumber, setPageNumber] = useState<number>(initialPage);
  const [cardData, setCardData] =
    useState<CardPropsType[]>(initialTrendingData);
  const [totalResults, setTotalResults] = useState<number>(initialTotal);

  const createQueryString = useCallback(
    (tab: string, page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tab);
      params.set("page", page.toString());

      return params.toString();
    },
    [searchParams]
  );

  const fetchNewData = useCallback(
    async (selectedTab: string, pageNumber: number) => {
      const newData = await GetTrending(selectedTab, pageNumber);
      setCardData(TransformTrendingData(newData));
      setTotalResults(newData.total_results);
    },
    [GetTrending]
  );

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    setPageNumber(1);
    fetchNewData(tab, 1);
    router.replace(pathname + "?" + createQueryString(tab, 1));
  };

  const handlePageChange = (page: number) => {
    setPageNumber(page);
    fetchNewData(selectedTab, page);
    router.replace(pathname + "?" + createQueryString(selectedTab, page));
  };

  return (
    <div className={styles.trendingPage}>
      <SectionHeader title="Trending">
        <div className={styles.toggleTypeButtons}>
          <RadioButtons
            selectedValue={selectedTab}
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
      </SectionHeader>
      <div className={styles.pagination}>
        <Pagination
          current={pageNumber}
          total={totalResults}
          pageSize={initialDataCount}
          onChange={handlePageChange}
          showSizeChanger={false}
          align="center"
        />
      </div>
      <CardsContainer>
        {cardData.map((item, idx) => (
          <CardItem
            key={`${idx}-card-item-${item.title}`}
            imageSrc={item.imageSrc}
            title={item.title}
            releaseYear={item.releaseYear}
            imdb={item.imdb}
            showType={item.showType}
          />
        ))}
      </CardsContainer>
      <div className={styles.pagination}>
        <Pagination
          current={pageNumber}
          total={totalResults}
          pageSize={initialDataCount}
          onChange={handlePageChange}
          showSizeChanger={false}
          align="center"
        />
      </div>
    </div>
  );
};

export default TrendingPage;
