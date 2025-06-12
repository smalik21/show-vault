import React from "react";
import styles from "./latest-shows.module.scss";
import SectionHeader from "@/components/ui/section-header";
import CardsContainer from "@/components/ui/cards-container";
import { DataResponseType } from "@/types/types";
import { CardPropsType } from "@/types/propTypes";
import { FetchLatestTV } from "@/lib/apis";
import { ROUTE_PATHS } from "@/lib/constants";
import { TransformDataResponse } from "@/lib/utils";

const LatestShows = async () => {
  const latestTVResponse: DataResponseType = await FetchLatestTV();
  const latestTVData: CardPropsType[] = TransformDataResponse(
    latestTVResponse,
    "tv"
  );

  return (
    <div className={styles.latestShows}>
      <SectionHeader
        title="Latest TV Shows"
        isLink
        link={ROUTE_PATHS.HOME_LATEST_TV_SHOWS}
      ></SectionHeader>
      <CardsContainer cardList={latestTVData} />
    </div>
  );
};

export default LatestShows;
