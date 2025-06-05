"use client";

import React, { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./trending-page.module.scss";
import CardItem from "@/components/ui/card-item";
import CardsContainer from "@/components/ui/cards-container";
import RadioButtons from "@/components/ui/radio-buttons";
import SectionHeader from "@/components/ui/section-header";
import { TransformTrendingData } from "@/lib/utils";
import { CardPropsType } from "@/types/propTypes";
import { Pagination } from "antd";
import { TRENDING_TYPES } from "@/lib/constants";
import { DataResponseType } from "@/types/types";

export type TrendingPagePropsType = {
  initialPage: number;
  initialTab: string;
  initialTotal: number;
  initialDataCount: number;
  initialTrendingData: CardPropsType[];
  GetTrending: (
    trendingType?: string,
    pageNumber?: number
  ) => Promise<DataResponseType>;
};

const TrendingPage = (vm: TrendingPagePropsType) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedTab, setSelectedTab] = useState<string>(vm.initialTab);
  const [pageNumber, setPageNumber] = useState<number>(vm.initialPage);
  const [cardData, setCardData] = useState<CardPropsType[]>(
    vm.initialTrendingData
  );
  const [totalResults, setTotalResults] = useState<number>(vm.initialTotal);

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
      const newData = await vm.GetTrending(selectedTab, pageNumber);
      setCardData(TransformTrendingData(newData));
      setTotalResults(newData.total_results);
    },
    [vm]
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
          pageSize={vm.initialDataCount}
          onChange={handlePageChange}
          showSizeChanger={false}
          align="center"
        />
      </div>
      <CardsContainer>
        {cardData.map((item, idx) => (
          <CardItem
            key={`${idx}-card-item-${item.id}`}
            id={item.id}
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
          pageSize={vm.initialDataCount}
          onChange={handlePageChange}
          showSizeChanger={false}
          align="center"
        />
      </div>
    </div>
  );
};

export default TrendingPage;
