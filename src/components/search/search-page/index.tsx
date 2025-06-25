"use client";

import React, { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./search-page.module.scss";
import CardsContainer from "@/components/ui/cards-container";
import SectionHeader from "@/components/ui/section-header";
import { CardPropsType } from "@/types/propTypes";
import { Pagination } from "antd";
import { MultiDataResponseType } from "@/types/types";
import { TransformSearchData } from "@/lib/utils";
import { MAX_PAGES } from "@/lib/constants";

export type SearchPagePropsType = {
  initialPage: number;
  initialQuery: string;
  initialTotal: number;
  initialDataCount: number;
  initialData: CardPropsType[];
  GetSearchResults: (
    query?: string,
    pageNumber?: number
  ) => Promise<MultiDataResponseType>;
};

const SearchPage = (vm: SearchPagePropsType) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get("query") || "";
  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const [cardData, setCardData] = useState<CardPropsType[]>(vm.initialData);
  const [totalResults, setTotalResults] = useState<number>(vm.initialTotal);

  const createQueryString = useCallback(
    (query: string, page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("query", query);
      params.set("page", page.toString());

      return params.toString();
    },
    [searchParams]
  );

  const fetchNewData = useCallback(
    async (selectedQuery: string, pageNumber: number) => {
      try {
        const newData = await vm.GetSearchResults(selectedQuery, pageNumber);
        setCardData(TransformSearchData(newData));
        setTotalResults(newData.total_results);
      } catch {
        setCardData([]);
        setTotalResults(0);
      }
    },
    [vm]
  );

  const handlePageChange = (page: number) => {
    router.replace(pathname + "?" + createQueryString(query, page));
  };

  useEffect(() => {
    fetchNewData(query, pageFromUrl);
  }, [query, pageFromUrl, fetchNewData]);

  return (
    <div className={styles.searchPage}>
      <SectionHeader title="Showing results for">
        <span className={styles.query}>{query}</span>
      </SectionHeader>
      <div className={styles.pagination}>
        <Pagination
          current={pageFromUrl}
          defaultPageSize={vm.initialDataCount}
          total={Math.min(totalResults, MAX_PAGES * vm.initialDataCount)}
          onChange={handlePageChange}
          showSizeChanger={false}
          align="center"
        />
      </div>
      <CardsContainer cardList={cardData} />
      <div className={styles.pagination}>
        <Pagination
          current={pageFromUrl}
          defaultPageSize={vm.initialDataCount}
          total={Math.min(totalResults, MAX_PAGES * vm.initialDataCount)}
          onChange={handlePageChange}
          showSizeChanger={false}
          align="center"
        />
      </div>
    </div>
  );
};

export default SearchPage;
