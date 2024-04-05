import { useState } from "react";
import SearchIcon from "@/assets/components/nf-search.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function SearchInput({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    onSearch("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
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
          onChange={handleInputChange}
          value={searchTerm}
        />
        <button
          type="submit"
          className="absolute w-6 left-2 top-1/2 transform -translate-y-1/2"
        >
          <img src={SearchIcon} alt="Search" />
        </button>
        {searchTerm && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="absolute w-6 right-2 top-1/2 transform -translate-y-1/2"
            aria-label="Clear search"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        )}
      </div>
    </form>
  );
}

export default SearchInput;
