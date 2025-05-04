import { SearchIcon } from "@/lib/icons";
import styles from "./search-bar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
