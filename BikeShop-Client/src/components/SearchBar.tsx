/* eslint-disable @typescript-eslint/no-explicit-any */
// components/SearchBar.tsx

import { setQuery } from "../redux/features/search/searchSlice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state: { search: { query: any; }; }) => state.search.query);
  const [input, setInput] = useState(query);

  const handleSearch = () => {
    dispatch(setQuery(input));
  };

  return (
    <div className="flex items-center gap-2 p-4 justify-center">
      <input 
        type="text"
        placeholder="Search by name, brand or category"
        className="input input-bordered max-w-md"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
