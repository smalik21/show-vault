import React from "react";
import styles from "./section-header.module.scss";
import { SectionHeaderPropsType } from "@/types/propTypes";
import { DoubleRightArrowIcon } from "@/lib/icons";
import Link from "next/link";

const SectionHeader = (vm: SectionHeaderPropsType) => {
  return (
    <div className={`${styles.sectionHeader} ${vm.isTitleLink && styles.link}`}>
      {vm.isTitleLink && vm.link ? (
        <Link href={vm.link} className={styles.titleLink}>
          <h2 className={styles.title}>{vm.title}</h2>
          <DoubleRightArrowIcon width={40} height={40} />
        </Link>
      ) : (
        <h2 className={styles.title}>{vm.title}</h2>
      )}
      {vm.children}
    </div>
  );
};

export default SectionHeader;
