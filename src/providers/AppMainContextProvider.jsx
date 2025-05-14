import React, { useState } from "react";
import { AppMainContext } from "../contexts/AppMainContext";

const AppMainContextProvider = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState();
  const [orientation, setOrientation] = useState("vertical");
  const isVertical = orientation === "vertical";

  return (
    <AppMainContext.Provider
      value={{
        selectedRegion,
        setSelectedRegion,
        orientation,
        setOrientation,
        isVertical,
      }}
    >
      {children}
    </AppMainContext.Provider>
  );
};

export default AppMainContextProvider;
