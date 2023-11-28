// import { useState } from "react";

//  import { useEffect } from "react";
export default function Search({
  id,
  textSize,
  placeholder,
  onSearch,
  value,
  onSelect,
  name,
  searchResults,
}) {
  function updateSearchInput(event) {
    console.log(event.target.value);
    onSearch(event.target.value);
  }
  return (
    <form action="" className="bg-slate-100 py-2 mt-5 mx-auto px-2">
      <div className="border-l-2 border-yellow-400 inline-block w-full">
        <input
          type="search"
          name={name}
          tabIndex="1"
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={(event) => {
            updateSearchInput(event);
            event.target.name === "country-search" && onSelect(false);
          }}
          className={`py-1 px-2 caret-yellow-400 inline-block leading-7 bg-slate-100 ${textSize}  focus:bg-white outline-none w-full `}
        />
      </div>
    </form>
  );
}
export function ResultsBlock({
  searchResults,
  handleSearchTerm,
  loading,
  value,
  handleSelection,
  // isvalidSelection,
  isSelected,
}) {
  return (
    <div className="max-h-[70vh] overflow-y-auto">
      {!loading ? (
        searchResults?.map((result, index) => {
          return (
            <ResultEl
              name={result.name}
              imgUrl={result.flag}
              key={result.iso3 || result.state_code}
              handleSearchTerm={handleSearchTerm}
              searchValue={value}
              index={index}
              onSelect={handleSelection}
              isSelected={isSelected}
              // isvalidSelection={isvalidSelection}
            />
          );
        })
      ) : (
        <p className="italic">Loading...</p>
      )}
    </div>
  );
}
function ResultEl({
  name,
  imgUrl,
  handleSearchTerm,
  index,
  onSelect,
  isSelected,
}) {
  function setSearchTerm() {
    handleSearchTerm(name);
    onSelect(true);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setSearchTerm();
    }
  }

  return !isSelected ? (
    <div
      className="border-b  py-3 cursor-pointer pl-3"
      tabIndex={index + 2}
      onClick={setSearchTerm}
      onKeyDown={handleKeyPress}
      role="button"
    >
      <span className="flag">
        <img
          src={imgUrl}
          alt=""
          aria-label="Flag"
          className="w-6 inline-block me-9"
        />
      </span>
      <span>{name}</span>
    </div>
  ) : (
    ""
  );
}
