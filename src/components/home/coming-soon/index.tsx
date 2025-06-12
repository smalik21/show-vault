import React from "react";
import styles from "./coming-soon.module.scss";
import SectionHeader from "@/components/ui/section-header";
import CardsContainer from "@/components/ui/cards-container";
import { DataResponseType } from "@/types/types";
import { FetchUpcomingMovie } from "@/lib/apis";
import { CardPropsType } from "@/types/propTypes";
import { TransformDataResponse } from "@/lib/utils";
import { ROUTE_PATHS } from "@/lib/constants";

const ComingSoon = async () => {
  const upcomingMovieResponse: DataResponseType = await FetchUpcomingMovie();
  const upcomingMovieData: CardPropsType[] = TransformDataResponse(
    upcomingMovieResponse,
    "movie"
  );

  return (
    <div className={styles.comingSoon}>
      <SectionHeader
        title="Coming Soon"
        link={ROUTE_PATHS.HOME_COMING_SOON_VIEW_ALL}
        viewAllBtn
      ></SectionHeader>
      <CardsContainer cardList={upcomingMovieData} />
    </div>
  );
};

export default ComingSoon;
