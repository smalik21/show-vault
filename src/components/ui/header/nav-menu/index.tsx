"use client";

import { usePathname } from "next/navigation";
import styles from "./nav-menu.module.scss";
import Link from "next/link";

import clsx from "clsx";
import { NAV_LINKS } from "@/lib/constants";

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <menu className={styles.navMenu}>
      {NAV_LINKS.map((link) => (
        <div key={link.name} className={styles.linkContainer}>
          <Link
            href={link.path}
            className={clsx(styles.link, {
              [styles.active]: pathname === link.path,
            })}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </menu>
  );
};

export default NavMenu;
