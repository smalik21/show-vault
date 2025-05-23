"use client";

import React, { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./tv-shows-page.module.scss";
import CardItem from "@/components/ui/card-item";
import CardsContainer from "@/components/ui/cards-container";
import SectionHeader from "@/components/ui/section-header";
import { TransformPopularData } from "@/lib/utils";
import { CardPropsType, TvShowsPagePropsType } from "@/types/propTypes";
import { Pagination } from "antd";

const TvShowsPage = ({
  initialPage,
  initialTotal,
  initialDataCount,
  initialPopularData,
  GetPopularTV,
}: TvShowsPagePropsType) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [pageNumber, setPageNumber] = useState<number>(initialPage);
  const [cardData, setCardData] = useState<CardPropsType[]>(initialPopularData);
  const [totalResults, setTotalResults] = useState<number>(initialTotal);

  const createQueryString = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page.toString());

      return params.toString();
    },
    [searchParams]
  );

  const fetchNewData = useCallback(
    async (pageNumber: number) => {
      const newData = await GetPopularTV(pageNumber);
      setCardData(TransformPopularData(newData, "tv"));
      setTotalResults(newData.total_results);
    },
    [GetPopularTV]
  );

  const handlePageChange = (page: number) => {
    setPageNumber(page);
    fetchNewData(page);
    router.push(pathname + "?" + createQueryString(page));
  };

  return (
    <div className={styles.tvShowsPage}>
      <SectionHeader title="Popular TV Shows"></SectionHeader>
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

export default TvShowsPage;
