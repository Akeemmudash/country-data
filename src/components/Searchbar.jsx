import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useDebouncedValue } from "../hooks/useDebouncedValue";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedTerm = useDebouncedValue(searchTerm);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className="relative w-2/3 max-w-md">
      <Search className="ml-4 absolute left-0 top-1/2 -translate-y-1/2 text-gray-600" />
      <input
        type="text"
        className="px-12 py-2 border rounded-lg border-gray-200 w-full focus:outline-none focus:border-gray-400 placeholder:text-gray-500 text-gray-700"
        role="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default Searchbar;
