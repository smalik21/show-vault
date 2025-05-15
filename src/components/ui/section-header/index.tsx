import React from "react";
import styles from "./section-header.module.scss";
import { SectionHeaderPropsType } from "@/types/propTypes";
import { DoubleRightArrowIcon } from "@/lib/icons";

const SectionHeader = ({
  title,
  isTitleLink = false,
  children,
}: SectionHeaderPropsType) => {
  return (
    <div className={`${styles.sectionHeader} ${isTitleLink && styles.link}`}>
      {isTitleLink ? (
        <div className={styles.titleLink}>
          <h2 className={styles.title}>{title}</h2>
          <DoubleRightArrowIcon width={40} height={40} />
        </div>
      ) : (
        <h2 className={styles.title}>{title}</h2>
      )}
      {children && children}
    </div>
  );
};

export default SectionHeader;
