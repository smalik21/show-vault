import { FetchSearchResults } from "@/lib/apis";
import styles from "./search.module.scss";
import { TransformSearchData } from "@/lib/utils";
import SearchPage from "@/components/search/search-page";
import { GetSearchResults } from "@/lib/actions";

const Search = async ({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const searchParams = await searchParamsPromise;
  const query = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;

  const initialDataReponse = await FetchSearchResults(query, page);
  const initialTotal = initialDataReponse.total_results;
  const initialDataCount = initialDataReponse.results.length;
  const initialData = TransformSearchData(initialDataReponse);

  return (
    <main className={styles.search}>
      <SearchPage
        initialQuery={query}
        initialPage={page}
        initialTotal={initialTotal}
        initialDataCount={initialDataCount}
        initialData={initialData}
        GetSearchResults={GetSearchResults}
      />
    </main>
  );
};

export default Search;
