import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import SearchFilter from "./SearchFilter";
import { useCountriesDataContext } from "../hooks/useCountriesDataContext";

const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { searchTerm, handleSearchChange } = useCountriesDataContext();
  return (
    <>
      <form className="relative w-2/3 max-w-md overflow-hidden rounded-lg">
        <Search className="ml-4 absolute left-0 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          className="px-12 py-2 border rounded-lg border-gray-200 w-full focus:outline-none focus:border-gray-400 placeholder:text-gray-500 text-gray-700"
          role="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for a country..."
        />
        <SlidersHorizontal
          className="p-2.5 absolute right-[1px] top-1/2 -translate-y-1/2 text-gray-500 size-10 cursor-pointer hover:bg-gray-50/95 rounded-e-lg active:bg-gray-50/80 "
          onClick={() => setIsOpen(true)}
          role="button"
        />
      </form>
      <SearchFilter isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  );
};

export default Searchbar;
