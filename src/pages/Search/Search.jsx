import SearchInput from "@/components/atom/SearchInput";
import { Helmet } from "react-helmet";

function Search() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NONFICTION | 검색</title>
      </Helmet>
      <section className="w-full h-screen flex items-center justify-center">
        <h2 className="sr-only">검색</h2>
        <SearchInput />
      </section>
    </>
  );
}

export default Search;
