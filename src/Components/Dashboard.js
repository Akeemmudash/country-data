import React, { useState, useEffect, useRef } from "react";

import Search from "./Search";
import { ResultsBlock } from "./Search";

function Dashboard() {
  const recentSearch = localStorage.getItem("searchValue");
  const [search, setSearch] = useState(recentSearch || "");
  const [isSelected, setIsSelected] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef(data.fetchData);

  function handleSelection(isSelected) {
    setIsSelected(isSelected);
  }
  function handleSearchTerm(value) {
    console.log(value);
    value && localStorage.setItem("searchValue", value);
    setSearch(value);
  }
  useEffect(() => {
    handleSearchTerm(search);
    console.log(search);
  }, [search]);

  let matches;
  useEffect(() => {
    async function handleFetchData() {
      const fetchMethod = {
        method: "GET",
        redirect: "follow",
      };
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/flag/images",
          fetchMethod
        );
        const result = await response.json();
        console.log(result);
        setData({ fetchData: result.data, loading: false });
        listRef.current = result.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    handleFetchData();
  }, [search]);

  if (listRef.current) {
    matches = listRef.current.filter((match) => {
      return match.name.toLowerCase().includes(search.toLowerCase());
    });
  }
  // console.log(matches);
  const countrySelect = isSelected ? search : null;
  console.log(countrySelect, "country selected");
  return (
    <>
      <article className="flex min-h-screen ">
        <section className="banner flex-1 hidden lg:block ">
          <img
            src="./images/world-map.jpg"
            alt="Banner"
            className="banner__img w-full object-cover h-full"
          />
        </section>
        <section className="w-1/2 min-w-max  flex-1 max-h-screen overflow-y-auto">
          <CountryList
            handleSearchTerm={handleSearchTerm}
            result={data.fetchData}
            countrySelect={countrySelect}
            value={search}
            searchResults={matches}
            handleSelection={handleSelection}
            isSelected={isSelected}
          />
          <ResultsBlock
            searchResults={matches}
            loading={data.loading}
            handleSearchTerm={handleSearchTerm}
            value={search}
            isSelected={isSelected}
            handleSelection={handleSelection}
          />
        </section>
      </article>
    </>
  );
}

function StateList({ onSearch }) {
  return (
    <div className="state-section">
      <h2 className="font-medium text-xl mt-5 mb-3">Specify the State</h2>
      <Search
        placeholder={"Enter the state"}
        id="state-search"
        textSize={"text-[16px]"}
        onSearch={onSearch}
      />
    </div>
  );
}

export default Dashboard;
