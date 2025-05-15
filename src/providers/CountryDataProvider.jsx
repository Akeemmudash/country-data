import React, { useState } from "react";
import { CountryDataContext } from "../contexts/CountryDataContext";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { useSearchCountriesQuery } from "../hooks/useSearchCountriesQuery";
import { useCountries } from "../hooks/useCountries";
import { useFilteredCountries } from "../hooks/useFilteredCountries";

const CountryDataProvider = ({ children }) => {
  const [searchBy, setSearchBy] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedTerm = useDebouncedValue(searchTerm);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const hasSearchTerm = !!debouncedTerm;
  const isRegionSelected = !!selectedRegion?.value;

  const {
    data: allCountries,
    isPending: isAllCountriesPending,
    isError: isAllCountriesError,
    error: allCountriesError,
  } = useCountries({ enabled: !isRegionSelected });

  const {
    data: filteredCountries,
    isPending: isFilteredPending,
    isError: isFilteredError,
    error: filteredError,
  } = useFilteredCountries(selectedRegion?.value, {
    enabled: isRegionSelected,
  });

  const {
    isPending: isSearchPending,
    data: searchData,
    error: searchError,
    isError: isSearchError,
  } = useSearchCountriesQuery(debouncedTerm, searchBy, {
    enabled: hasSearchTerm,
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const isLoading = hasSearchTerm
    ? isSearchPending
    : isRegionSelected
    ? isFilteredPending
    : isAllCountriesPending;

  const isErrored = hasSearchTerm
    ? isSearchError
    : isSearchPending
    ? isFilteredError
    : isAllCountriesError;

  const error = hasSearchTerm
    ? searchError
    : selectedRegion?.value
    ? filteredError
    : allCountriesError;

  const data = searchData || filteredCountries || allCountries;

  return (
    <CountryDataContext.Provider
      value={{
        selectedRegion,
        setSelectedRegion,
        hasSearchTerm,
        searchBy,
        setSearchBy,
        handleSearchChange,
        isLoading,
        isErrored,
        error,
        data,
      }}
    >
      {children}
    </CountryDataContext.Provider>
  );
};

export default CountryDataProvider;
