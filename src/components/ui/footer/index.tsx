import React from "react";
import styles from "./footer.module.scss";
import Logo from "../logo";
import { FOOTER_CONTENT } from "@/lib/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerHeader}>
        <span className={styles.logo}>
          <Logo />
        </span>
        <span
          className={styles.copyright}
        >{`© ${new Date().getFullYear()} ShowVault`}</span>
      </section>
      <section className={styles.footerContent}>
        {FOOTER_CONTENT.map((column) => (
          <div
            key={`footer-column-${column.title}`}
            className={styles.footerColumn}
          >
            <div className={styles.columnTitle}>
              {column.title.toLocaleUpperCase()}
            </div>
            <div className={styles.columnLinks}>
              {column.links.map((link) => (
                <Link
                  key={`footer-link-${link.name}`}
                  href={link.path}
                  className={styles.link}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </footer>
  );
};

export default Footer;
