import { useState } from "react";

import css from "./SearchBar.module.css";

import RecentlySearchedList from "../RecentlySearchedList/RecentlySearchedList";
import SearchInput from "../SearchInput/SearchInput";

const SearchBar = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  return (
    <div className={css["container"]}>
      <SearchInput
        onNewSearch={(newSearch) =>
          setSearchHistory([...searchHistory, newSearch])
        }
      />
      <RecentlySearchedList searchHistory={searchHistory} />
    </div>
  );
};

export default SearchBar;
