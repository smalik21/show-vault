"use client";

import { SearchIcon } from "@/lib/icons";
import Button from "../Button";
import styles from "./search-filter.module.scss";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";

type SearchFilterPropsType = {
  onClose?: () => void;
};

const SearchFilter = (vm: SearchFilterPropsType) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.elements.namedItem(
      "search-keyword"
    ) as HTMLInputElement | null;

    if (!input?.value) return;

    router.push(`/search?query=${encodeURIComponent(input.value)}`);

    form.reset();
    vm.onClose?.();
  };

  return (
    <div className={styles.searchFilter}>
      <div className={styles.heading}>Search by Keyword</div>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          ref={inputRef}
          className={styles.searchInput}
          type="text"
          id="search-keyword"
          name="search-keyword"
          autoComplete="off"
          autoCorrect="off"
          placeholder="Enter keyword to search..."
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
