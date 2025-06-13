"use client";

import { useEffect, useState } from "react";
import Logo from "../logo";
import HeaderOptions from "./header-options";

import styles from "./header.module.scss";
import NavMenu from "./nav-menu";
import { usePathname } from "next/navigation";
import { ROUTE_PATHS } from "@/lib/constants";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      const banner = document.getElementById("home-banner-slideshow");
      if (!banner) {
        setScrolled(true);
        return;
      }
      const bannerBottom = banner.getBoundingClientRect().bottom;
      const isScrolled: boolean = bannerBottom <= 80;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled, pathname]);

  return (
    <header className={`${styles.header} ${scrolled && styles.headerSolid}`}>
      <Link href={ROUTE_PATHS.APP_LOGO} className={styles.logo}>
        <Logo />
      </Link>
      <menu className={styles.navMenu}>
        <NavMenu />
      </menu>
      <div className={styles.headerOptions}>
        <HeaderOptions />
      </div>
    </header>
  );
};

export default Header;
