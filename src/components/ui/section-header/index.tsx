import React from "react";
import styles from "./section-header.module.scss";
import { SectionHeaderPropsType } from "@/types/propTypes";

const SectionHeader = ({ title, children }: SectionHeaderPropsType) => {
  return (
    <div className={styles.sectionHeader}>
      <h2 className={styles.title}>{title}</h2>
      {children && children}
    </div>
  );
};

export default SectionHeader;
