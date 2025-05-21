"use client";

import { useEffect, useState } from "react";
import Logo from "../logo";
import HeaderOptions from "./header-options";

import styles from "./header.module.scss";
import NavMenu from "./nav-menu";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

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

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <header className={`${styles.header} ${scrolled && styles.headerSolid}`}>
      <div className={styles.logo} onClick={handleLogoClick}>
        <Logo />
      </div>
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
