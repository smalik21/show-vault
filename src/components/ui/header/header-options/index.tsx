import ThemeSwitcher from "./theme-switcher";
import SearchBar from "./search-bar";
import styles from "./header-options.module.scss";
import Button from "../../Button";

const HeaderOptions = () => {
  return (
    <div className={styles.headerOptions}>
      <Button>
        <SearchBar />
      </Button>
      <Button>
        <ThemeSwitcher />
      </Button>
      <Button
        borderRadius="full"
        textSize="sm"
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
