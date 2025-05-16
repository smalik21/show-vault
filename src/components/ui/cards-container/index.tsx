import React from "react";
import styles from "./cards-container.module.scss";
import { CardsContainerProps } from "@/types/propTypes";

const CardsContainer = ({ children }: CardsContainerProps) => {
  return <div className={styles.cardsContainer}>{children}</div>;
};

export default CardsContainer;
