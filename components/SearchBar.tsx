"use client";

import SearchManufacturer from "./SearchManufacturer";

const handleSearch = () => {};

const SearchBar = () => {
  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer />
      </div>
    </form>
  );
};

export default SearchBar;
