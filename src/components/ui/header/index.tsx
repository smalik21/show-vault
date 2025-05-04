import Logo from "../logo";
import HeaderOptions from "./header-options";

import styles from "./header.module.scss";
import NavMenu from "./nav-menu";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavMenu />
      <HeaderOptions />
    </header>
  );
};

export default Header;
