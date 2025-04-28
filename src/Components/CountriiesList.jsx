import { useState, useEffect } from "react";

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
  const stateMatches =
    stateData &&
    stateData.states.filter((data) => {
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
            {stateMatches &&
              stateMatches.map((stateMatch) => {
                return (
                  <div
                    className="state text-start py-2 pl-6 text-gray-400 hover:text-gray-900"
                    key={stateMatch.state_code}
                  >
                    {stateMatch.name}
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CountryList;
