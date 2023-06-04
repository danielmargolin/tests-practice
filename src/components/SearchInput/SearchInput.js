import { useContext, useState } from "react";
import Button from "../common/Button/Button";

import Input from "../common/Input/Input";

import { MoviesContext } from "../MoviesProvider/MoviesProvider";

const SearchInput = ({ onNewSearch = () => {} }) => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchMovies } = useContext(MoviesContext);

  const onSearchButtonClick = () => {
    fetchMovies(searchValue);
    onNewSearch(searchValue);
    setSearchValue("");
  };

  return (
    <div>
      <Input value={searchValue} onChange={setSearchValue} />
      <Button onClick={onSearchButtonClick}>Search</Button>
    </div>
  );
};

export default SearchInput;
