"use client";

import { SearchIcon } from "@/lib/icons";
import Button from "../Button";
import styles from "./search-filter.module.scss";

const SearchFilter = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.elements.namedItem(
      "search-keyword"
    ) as HTMLInputElement | null;

    if (!input?.value) return;

    console.log(input?.value);
    form.reset();
  };

  return (
    <div className={styles.searchFilter}>
      <div className={styles.heading}>Search by Keyword</div>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type="text"
          id="search-keyword"
          name="search-keyword"
          autoComplete="off"
          autoCorrect="off"
        />
        <span className={styles.buttonContainer}>
          <Button padding="md" textSize="lg">
            <SearchIcon />
          </Button>
        </span>
      </form>
    </div>
  );
};

export default SearchFilter;
