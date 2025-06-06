import React from "react";
import styles from "./section-header.module.scss";
import { DoubleRightArrowIcon } from "@/lib/icons";
import Link from "next/link";
import Button from "../Button";

export type SectionHeaderPropsType = {
  title: string;
  isLink?: boolean;
  link?: string;
  viewAllBtn?: boolean;
  children?: React.ReactNode;
};

const SectionHeader = (vm: SectionHeaderPropsType) => {
  return (
    <div className={`${styles.sectionHeader} ${vm.isLink && styles.link}`}>
      {vm.isLink && vm.link ? (
        <Link href={vm.link} className={styles.titleLink}>
          <h2 className={styles.title}>{vm.title}</h2>
          <DoubleRightArrowIcon width={40} height={40} />
        </Link>
      ) : (
        <h2 className={styles.title}>{vm.title}</h2>
      )}
      {vm.children}
      {vm.viewAllBtn && vm.link && (
        <Link href={vm.link} className={styles.viewAllButton}>
          <Button textColor="gray" textSize="lg">
            View All
          </Button>
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
