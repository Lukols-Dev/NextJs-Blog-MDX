"use client";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string | null>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };

  const clickSearch = () => {
    if (!query) router.push("/");
    router.push(`?search=${query}`);

    /**TODO:
     * Feature:
     * Add redux reducer for global search icon by id element container
     */
  };

  // onKeyDown handler function
  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      clickSearch();
    }
  };

  return (
    <div className="relative mx-auto text-gray-600 flex items-center w-full">
      <input
        className="bg-white h-10 px-5 pr-10 rounded-lg text-sm w-full focus:outline-none"
        placeholder="Odkryj mądrość senseja"
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => keyDownHandler(e)}
      />
      <button
        type="submit"
        className=" h-full w-auto px-2 absolute right-0 top-0"
        onClick={clickSearch}
      >
        <SearchIcon className="text-gray-600 fill-current" />
      </button>
    </div>
  );
};
