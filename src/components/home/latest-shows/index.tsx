import React from "react";
import styles from "./latest-shows.module.scss";
import SectionHeader from "@/components/ui/section-header";
import CardItem from "@/components/ui/card-item";
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
      <CardsContainer>
        {latestTVData.map((item) => (
          <CardItem
            key={`card-item-${item.id}`}
            id={item.id}
            imageSrc={item.imageSrc}
            title={item.title}
            releaseYear={item.releaseYear}
            imdb={item.imdb}
            showType={item.showType}
          />
        ))}
      </CardsContainer>
    </div>
  );
};

export default LatestShows;
