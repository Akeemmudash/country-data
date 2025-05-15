import React from "react";
import { useCountriesDataContext } from "../hooks/useCountriesDataContext";
import Modal from "./Modal";

const searchFilters = [
  { label: "name", value: "name" },
  { label: "currency", value: "currency" },
  { label: "language", value: "language" },
  { label: "capital city", value: "capital" },
];

export default function SearchFilter({ isOpen, handleClose }) {
  const { searchBy, setSearchBy } = useCountriesDataContext();
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <form action="" className="space-y-4  ">
        <h2 className="text-3xl font-semibold ">Search by:</h2>

        {searchFilters.map((filter) => (
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="searchby"
              id={filter.value}
              className="size-5"
              value={filter.value}
              checked={filter.value === searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
            />
            <label htmlFor={filter.value} className="text-lg capitalize">
              {filter.label}
            </label>
          </div>
        ))}
      </form>
    </Modal>
  );
}
