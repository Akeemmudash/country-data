import React from "react";
import Searchbar from "./Searchbar";
import RegionFilter from "./RegionFilter";
import CardTypeDisplayToggler from "./CardTypeDisplayToggler";

export default function Header() {
  return (
    <header>
      <div className="container py-6 border-b">
        <h1 className="text-4xl font-semibold mb-6">World Facts</h1>
        <div className="flex justify-between items-center  border-gray-300">
          <Searchbar />
          <div className="ms-auto me-4">
            <CardTypeDisplayToggler />
          </div>
          <RegionFilter />
        </div>
      </div>
    </header>
  );
}
