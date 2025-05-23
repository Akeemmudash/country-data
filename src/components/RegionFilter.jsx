import React from "react";
import Select from "./Select";
import { useCountriesDataContext } from "../hooks/useCountriesDataContext";

const options = [
  { value: "Africa", id: "0" },
  { value: "Oceania", id: "1" },
  { value: "Europe", id: "2" },
  { value: "Americas", id: "3" },
  { value: "Asia", id: "4" },
  { value: null, id: "5", name: "All Countries" },
];
function RegionFilter() {
  const { selectedRegion, setSelectedRegion, hasSearchTerm } =
    useCountriesDataContext();
  if (hasSearchTerm) return null;
  return (
    <Select
      options={options}
      selectedItem={selectedRegion}
      setFunction={setSelectedRegion}
      className="max-w-48"
      placeholder="Filter by Region"
    />
  );
}

export default RegionFilter;
