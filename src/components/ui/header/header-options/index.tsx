import ThemeSwitcher from "./theme-switcher";
import SearchBar from "./search-bar";
import styles from "./header-options.module.scss";
import Button from "../../Button";
import { SERVICES_ENABLED } from "@/lib/constants";

const HeaderOptions = () => {
  return (
    <div className={styles.headerOptions}>
      {SERVICES_ENABLED.SEARCH && (
        <Button>
          <SearchBar />
        </Button>
      )}
      <Button>
        <ThemeSwitcher />
      </Button>
      {SERVICES_ENABLED.USER_ACCOUNT && (
        <Button
          borderRadius="full"
          textSize="sm"
          padding="sm"
          textColor="white"
          bgColor="orange"
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default HeaderOptions;
