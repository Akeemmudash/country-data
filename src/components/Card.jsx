import React from "react";

export default function Card({ name, capital, region, population, flag }) {
  return (
    <div className="border border-gray-200 rounded-lg px-4 py-6  text-gray-800 flex gap-8 [.vertical_&]:flex-col [.vertical_&]:gap-2">
      <div className="bg-gray-300 w-40 h-24 rounded-md mb-2 border-gray-100 border overflow-clip [.vertical_&]:w-20 [.vertical_&]:h-12">
        <img src={flag.png} alt={flag.alt} className="size-full" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-base font-medium mb-2">{name.common}</h2>
        <p className="text-sm font-light mb-1">{capital}</p>
        <p className="font-light"> {population.toLocaleString()}</p>
        <p className="text-gray-400 mt-auto">{region}</p>
      </div>
    </div>
  );
}
