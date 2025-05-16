import React from "react";

export default function Card({ name, capital, region, population, flag }) {
  return (
    <div className="border border-gray-100 rounded-lg p-0.5  text-gray-800 ">
      <div className="rounded-lg flex gap-8 [.vertical_&]:flex-col [.vertical_&]:gap-2 px-4 py-6  bg-gray-50/70 h-full">
        <div className="bg-gray-300 w-40 flex-shrink-0 h-24 rounded-md mb-2 border-gray-100 border overflow-clip [.vertical_&]:w-20 [.vertical_&]:h-12">
          <img
            src={flag.png}
            alt={flag.alt}
            className="size-full object-cover"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="text-base font-medium mb-2 cursor-pointer hover:underline">
            {name.common}
          </h2>
          <p className="text-sm font-light mb-1">
            <b className="text-stone-400">Capital:</b> {capital}
          </p>
          <p className="text-sm font-light mb-2">
            <b className="text-stone-400">Population:</b>{" "}
            {population.toLocaleString()}
          </p>
          <p className="text-gray-400 mt-auto">{region}</p>
        </div>
      </div>
    </div>
  );
}
