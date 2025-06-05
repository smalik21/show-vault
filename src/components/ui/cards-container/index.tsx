import React from "react";
import styles from "./cards-container.module.scss";

export type CardsContainerProps = {
  children: React.ReactNode;
};

const CardsContainer = ({ children }: CardsContainerProps) => {
  return <div className={styles.cardsContainer}>{children}</div>;
};

export default CardsContainer;
