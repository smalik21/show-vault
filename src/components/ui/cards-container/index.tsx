"use client";

import React from "react";
import styles from "./cards-container.module.scss";
import { CardPropsType } from "@/types/propTypes";
import CardItem from "../card-item";
import { useCardsColumns } from "@/lib/hooks";

export type CardsContainerProps = {
  cardList: CardPropsType[];
};

const CardsContainer = (vm: CardsContainerProps) => {
  const columns = useCardsColumns();
  const cards = vm.cardList;

  if (cards.length === 0) return null;
  if (cards.length <= columns) {
    return (
      <div className={styles.cardsContainer}>
        {cards.map((item, idx) => (
          <CardItem
            key={`card-item-${item.id}-${idx}`}
            id={item.id}
            imageSrc={item.imageSrc}
            title={item.title}
            releaseYear={item.releaseYear}
            imdb={item.imdb}
            showType={item.showType}
          />
        ))}
      </div>
    );
  }

  const fullRowsCount = Math.floor(cards.length / columns) * columns;
  if (fullRowsCount === 0) {
    return (
      <div className={styles.cardsContainer}>
        {cards.map((item) => (
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
      </div>
    );
  }

  return (
    <div className={styles.cardsContainer}>
      {cards.slice(0, fullRowsCount).map((item) => (
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
    </div>
  );
};

export default CardsContainer;
