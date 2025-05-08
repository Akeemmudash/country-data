import React, { useState } from "react";
import Select from "./Select";

function RegionFilter() {
  const options = Array.from({ length: 10 }).map((_, index) => ({
    name: String(index),
    value: String(index),
    id: String(index),
  }));
  console.log(options);
  const [value, setValue] = useState();
  return (
    <div>
      <Select
        options={options}
        selectedItem={value}
        setFunction={setValue}
        className="min-w-48"
        placeholder="Filter by Region"
      />
    </div>
  );
}

export default RegionFilter;
