import React from "react";
import styles from "./coming-soon.module.scss";
import SectionHeader from "@/components/ui/section-header";
import Button from "@/components/ui/button";
import CardItem from "@/components/ui/card-item";
import CardsContainer from "@/components/ui/cards-container";
import { DataResponseType } from "@/types/types";
import { FetchUpcomingMovie } from "@/lib/apis";
import { CardPropsType } from "@/types/propTypes";
import { TransformLatestData } from "@/lib/utils";

const ComingSoon = async () => {
  const upcomingMovieResponse: DataResponseType = await FetchUpcomingMovie();
  const upcomingMovieData: CardPropsType[] = TransformLatestData(
    upcomingMovieResponse,
    "movie"
  );

  return (
    <div className={styles.comingSoon}>
      <SectionHeader title="Coming Soon">
        <div className={styles.viewAllButton}>
          <Button textColor="gray" textSize="lg">
            View All
          </Button>
        </div>
      </SectionHeader>
      <CardsContainer>
        {upcomingMovieData.map((item) => (
          <CardItem
            key={`card-item-${item.title}`}
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

export default ComingSoon;
