"use client";

import React, { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./paginated-cards.module.scss";
import CardItem from "@/components/ui/card-item";
import CardsContainer from "@/components/ui/cards-container";
import SectionHeader from "@/components/ui/section-header";
import { CardPropsType } from "@/types/propTypes";
import { Pagination } from "antd";
import { GetTransformDataFunction } from "@/lib/utils";
import { GetDataFunctionType, ShowDataType, ShowType } from "@/types/types";

export type PaginatedCardsPropsType = {
  headerTitle: string;
  initialPage: number;
  initialTotal: number;
  initialDataCount: number;
  initialData: CardPropsType[];
  mediaType: ShowType;
  showDataType: ShowDataType;
  id?: number;
  GetData: GetDataFunctionType;
};

const PaginatedCards = (vm: PaginatedCardsPropsType) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const TransformData = GetTransformDataFunction(vm.showDataType);

  const [pageNumber, setPageNumber] = useState<number>(vm.initialPage);
  const [cardData, setCardData] = useState<CardPropsType[]>(vm.initialData);
  const [totalResults, setTotalResults] = useState<number>(vm.initialTotal);

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
      try {
        let newData;
        if (vm.id) {
          newData = await vm.GetData(vm.id, pageNumber);
        } else {
          newData = await vm.GetData(pageNumber);
        }
        setCardData(TransformData(newData, vm.mediaType));
        setTotalResults(newData.total_results);
      } catch {
        setCardData([]);
        setTotalResults(0);
      }
    },
    [vm, TransformData]
  );

  const handlePageChange = (page: number) => {
    setPageNumber(page);
    fetchNewData(page);
    router.replace(pathname + "?" + createQueryString(page));
  };

  return (
    <div className={styles.paginatedCards}>
      <SectionHeader title={vm.headerTitle}></SectionHeader>
      <div className={styles.pagination}>
        <Pagination
          current={pageNumber}
          defaultPageSize={vm.initialDataCount}
          total={totalResults}
          onChange={handlePageChange}
          showSizeChanger={false}
          align="center"
        />
      </div>
      {cardData.length === 0 && (
        <div className={styles.emptyList}>No results found!</div>
      )}
      <CardsContainer>
        {cardData.map((item, idx) => (
          <CardItem
            id={item.id}
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
          defaultPageSize={vm.initialDataCount}
          total={totalResults}
          onChange={handlePageChange}
          showSizeChanger={false}
          align="center"
        />
      </div>
    </div>
  );
};

export default PaginatedCards;
