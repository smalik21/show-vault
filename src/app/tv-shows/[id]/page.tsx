import React from "react";
import styles from "./tv-details.module.scss";
import { FetchTVDetails } from "@/lib/apis";
import {
  GetVideoUrl,
  TransformDataResponse,
  TransformTVDetailsData,
} from "@/lib/utils";
import DetailSection from "@/components/ui/detail-section";
import CastSection from "@/components/ui/cast-section";
import SectionHeader from "@/components/ui/section-header";
import CardsContainer from "@/components/ui/cards-container";
import CardItem from "@/components/ui/card-item";

const TvDetails = async ({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) => {
  const params = await paramsPromise;
  const { id } = params;

  const tvDetailsResponse = await FetchTVDetails(id);

  const { videoKey, detailSection, cast, similarTV } =
    TransformTVDetailsData(tvDetailsResponse);

  const videoUrl = GetVideoUrl(videoKey);

  const similarTVData = TransformDataResponse(similarTV, "tv");

  return (
    <main className={styles.tvDetails}>
      {videoUrl && (
        <div className={styles.videoBackground}>
          <iframe
            className={styles.videoIframe}
            src={videoUrl.replace("watch?v=", "embed/")}
            title="TV Show Trailer"
            allow="autoplay; encrypted-media"
            loading="lazy"
            allowFullScreen
          />
        </div>
      )}
      <section className={styles.detailSection}>
        <DetailSection {...detailSection} />
      </section>
      <section className={styles.castSection}>
        <CastSection cast={cast} />
      </section>
      <section className={styles.similarSection}>
        <SectionHeader
          title="You May Also Like"
          link={`/tv-shows/${id}/similar`}
          viewAllBtn
        ></SectionHeader>
        <CardsContainer>
          {similarTVData.map((item) => (
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
      </section>
    </main>
  );
};

export default TvDetails;
