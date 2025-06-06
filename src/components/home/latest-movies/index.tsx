import React from "react";
import styles from "./latest-movies.module.scss";
import SectionHeader from "@/components/ui/section-header";
import CardItem from "@/components/ui/card-item";
import CardsContainer from "@/components/ui/cards-container";
import { FetchLatestMovie } from "@/lib/apis";
import { DataResponseType } from "@/types/types";
import { CardPropsType } from "@/types/propTypes";
import { ROUTE_PATHS } from "@/lib/constants";
import { TransformDataResponse } from "@/lib/utils";

const LatestMovies = async () => {
  const latestMovieResponse: DataResponseType = await FetchLatestMovie();
  const latestMovieData: CardPropsType[] = TransformDataResponse(
    latestMovieResponse,
    "movie"
  );

  return (
    <div className={styles.latestMovies}>
      <SectionHeader
        title="Latest Movies"
        isLink
        link={ROUTE_PATHS.HOME_LATEST_MOVIES}
      ></SectionHeader>
      <CardsContainer>
        {latestMovieData.map((item) => (
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

export default LatestMovies;
