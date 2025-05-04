import ThemeSwitcher from "./theme-switcher";
import SearchBar from "./search-bar";
import styles from "./header-options.module.scss";
import Button from "../../button";

const HeaderOptions = () => {
  return (
    <div className={styles.headerOptions}>
      <SearchBar />
      <ThemeSwitcher />
      <Button
        borderRadius="full"
        textSize="lg"
        padding="sm"
        textColor="white"
        bgColor="orange"
      >
        Login
      </Button>
    </div>
  );
};

export default HeaderOptions;
