import SearchIcon from "@/assets/components/nf-search.svg";

function SearchInput() {
  return (
    <form
      action=""
      className="w-1/3 flex flex-col gap-6 items-center justify-center"
    >
      <label htmlFor="inputSearch" className="font-noto-serif">
        SEARCH
      </label>
      <div className="w-full relative">
        <input
          type="search"
          name="inputSearch"
          id="inputSearch"
          placeholder="검색어를 입력하세요."
          className="w-full border-b border-black-100 p-2 pl-9"
        />
        <img
          src={SearchIcon}
          className="absolute w-6 left-2 top-1/2 transform -translate-y-1/2"
        />
      </div>
    </form>
  );
}

export default SearchInput;
