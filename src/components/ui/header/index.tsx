import Logo from "../logo";
import HeaderOptions from "./header-options";

import styles from "./header.module.scss";
import NavMenu from "./nav-menu";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
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
