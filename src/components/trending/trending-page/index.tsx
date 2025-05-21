"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./trending-page.module.scss";
import CardItem from "@/components/ui/card-item";
import CardsContainer from "@/components/ui/cards-container";
import RadioButtons from "@/components/ui/radio-buttons";
import SectionHeader from "@/components/ui/section-header";
import { GetTrending } from "@/lib/actions";
import { TransformTrendingData } from "@/lib/utils";
import { CardPropsType, TrendingPagePropsType } from "@/types/propTypes";
import { Pagination } from "antd";
import { TRENDING_TYPES } from "@/lib/constants";

const TrendingPage = ({
  initialTab,
  initialPage,
  initialTotal,
  initialTrendingData,
}: TrendingPagePropsType) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isFirstLoad = useRef(true);

  const [selectedTab, setSelectedTab] = useState<string>(initialTab);
  const [pageNumber, setPageNumber] = useState<number>(initialPage);
  const [cardData, setCardData] =
    useState<CardPropsType[]>(initialTrendingData);
  const [totalResults, setTotalResults] = useState<number>(initialTotal);

  useEffect(() => {
    if (
      isFirstLoad.current &&
      selectedTab === initialTab &&
      pageNumber === initialPage
    ) {
      isFirstLoad.current = false;
      return;
    }
    let isMounted = true;
    GetTrending(selectedTab, pageNumber).then((response) => {
      if (isMounted) {
        setCardData(TransformTrendingData(response));
        setTotalResults(response.total_results);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [selectedTab, pageNumber, initialTab, initialPage]);

  const createQueryString = useCallback(
    (tab: string, page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tab);
      params.set("page", page.toString());

      return params.toString();
    },
    [searchParams]
  );

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    setPageNumber(1);
    router.push(pathname + "?" + createQueryString(tab, 1));
  };

  const handlePageChange = (page: number) => {
    setPageNumber(page);
    router.push(pathname + "?" + createQueryString(selectedTab, page));
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
          pageSize={20}
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
          pageSize={20}
          onChange={handlePageChange}
          showSizeChanger={false}
          align="center"
        />
      </div>
    </div>
  );
};

export default TrendingPage;
