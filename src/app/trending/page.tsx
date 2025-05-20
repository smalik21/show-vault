"use client";

import React, { useCallback, useState } from "react";
import styles from "./trending.module.scss";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import SectionHeader from "@/components/ui/section-header";
import RadioButtons from "@/components/ui/radio-buttons";
import { TRENDING_TYPES } from "@/lib/constants";
import { Pagination } from "antd";

const Trending = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (tab: string, page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tab);
      params.set("page", page.toString());

      return params.toString();
    },
    [searchParams]
  );

  const [selectedTab, setSelectedTab] = useState<string>(
    searchParams.get("tab") || "all"
  );
  const [pageNumber, setPageNumber] = useState<number>(
    Number(searchParams.get("page")) || 1
  );

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    router.push(pathname + "?" + createQueryString(tab, pageNumber));
  };

  const handlePageChange = (page: number) => {
    setPageNumber(page);
    router.push(pathname + "?" + createQueryString(selectedTab, page));
  };

  return (
    <main className={styles.trending}>
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
          total={500}
          onChange={handlePageChange}
          showSizeChanger={false}
          align="center"
        />
      </div>
      <div className={styles.pagination}>
        <Pagination
          current={pageNumber}
          total={500}
          onChange={handlePageChange}
          showSizeChanger={false}
          align="center"
        />
      </div>
    </main>
  );
};

export default Trending;
