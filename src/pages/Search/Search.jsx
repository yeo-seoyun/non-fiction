import SearchInput from "@/components/atom/SearchInput";

function Search() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h2 className="sr-only">검색</h2>
      <SearchInput />
    </div>
  );
}

export default Search;
