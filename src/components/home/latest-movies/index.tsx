import React from "react";
import styles from "./latest-movies.module.scss";
import SectionHeader from "@/components/ui/section-header";
import CardItem from "@/components/ui/card-item";

const LatestMovies = () => {
  return (
    <div className={styles.latestMovies}>
      <SectionHeader title="Latest Movies" isTitleLink></SectionHeader>
      <div className={styles.cardsContainer}>
        {Array.from({ length: 10 }).map((_, idx) => (
          <CardItem
            key={`card-item-${idx}`}
            imageSrc={`https://images.unsplash.com/photo-1576473318185-48d76fc03314?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            title={`Title ${idx + 1}`}
            releaseYear={2023 - idx}
            imdb={6.9}
            showType={idx % 2 === 0 ? "movie" : "show"}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestMovies;
