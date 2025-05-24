import React from "react";
import styles from "./section-header.module.scss";
import { SectionHeaderPropsType } from "@/types/propTypes";
import { DoubleRightArrowIcon } from "@/lib/icons";
import Link from "next/link";

const SectionHeader = ({
  title,
  isTitleLink = false,
  link,
  children,
}: SectionHeaderPropsType) => {
  return (
    <div className={`${styles.sectionHeader} ${isTitleLink && styles.link}`}>
      {isTitleLink && link ? (
        <Link href={link} className={styles.titleLink}>
          <h2 className={styles.title}>{title}</h2>
          <DoubleRightArrowIcon width={40} height={40} />
        </Link>
      ) : (
        <h2 className={styles.title}>{title}</h2>
      )}
      {children && children}
    </div>
  );
};

export default SectionHeader;
