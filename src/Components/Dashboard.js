import React, { useState, useEffect, useRef } from "react";

import Search from "./Search";
import { ResultsBlock } from "./Search";

function Dashboard() {
  const recentSearch = localStorage.getItem("searchValue");
  const [search, setSearch] = useState(recentSearch || "");
  const [isSelected, setIsSelected] = useState(false);
  const [data, setData] = useState({ fetchData: null, loading: true });
  const listRef = useRef(data.fetchData);

  function handleSelection(is_selected) {
    setIsSelected(is_selected);
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
  // function handleValidSelection(is_valid) {
  //   setValidSelection(is_valid);
  // }
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
function CountryList({
  handleSearchTerm,
  value,
  handleSelection,
  countrySelect,
  searchResults,
  isSelected,
}) {
  const recentSearch = localStorage.getItem("stateSearch");
  const [stateSearch, setStateSearch] = useState(recentSearch || "");
  const [stateData, setStateData] = useState(recentSearch || "");

  function handleStateSearch(value) {
    setStateSearch(value);
  }
  const fetchData = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ country: countrySelect }),
        redirect: "follow",
      };

      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/states",
        requestOptions
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result.data);
      setStateData(result.data); // If you need to use data in the component state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(stateData);
  const stateMatches =  stateData && stateData.states.filter((data) => {
    return data.name.toLowerCase().includes(stateSearch.toLowerCase());
  });

  useEffect(() => {
    if (countrySelect) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countrySelect]);

  return (
    <div className="country-section text-center ">
      <h1 className="font-semibold text-2xl mt-5">Specify the Country</h1>
      <Search
        placeholder={"Enter the country"}
        id="country-search"
        textSize={"text-[20px]"}
        onSelect={handleSelection}
        onSearch={handleSearchTerm}
        value={value}
        name="country-search"
        searchResults={searchResults}
      />
      {isSelected ? (
        <div className="state-block">
          <StateList
            countrySelect={countrySelect}
            onSearch={handleStateSearch}
          />
          <div className="state-list">
            
            {" "}
            { stateMatches && stateMatches.map((stateMatch) => {
              return <div className="state text-start py-2 pl-6 text-gray-400 hover:text-gray-900" key={stateMatch.state_code}>{stateMatch.name}</div>;
            })}
          </div>
        </div>
      ) : (
        ""
      )}  
    </div>
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
