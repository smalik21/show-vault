import { useState } from "react";
import ThemeSwitcher from "./theme-switcher";
import SearchBar from "./search-bar";
import styles from "./header-options.module.scss";
import Button from "../../Button";
import { SERVICES_ENABLED } from "@/lib/constants";
import Overlay from "../../overlay";
import SearchFilter from "../../search-filter";

const HeaderOptions = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleSearchClick = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <div className={styles.headerOptions}>
      {SERVICES_ENABLED.SEARCH && (
        <Button onClick={handleSearchClick}>
          <SearchBar />
        </Button>
      )}
      {isSearchOpen && (
        <Overlay onClickOutside={handleSearchClick}>
          <SearchFilter />
        </Overlay>
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
