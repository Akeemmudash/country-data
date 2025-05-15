import React, { useState } from "react";
import { AppMainContext } from "../contexts/AppMainContext";

const AppMainProvider = ({ children }) => {
  const [cardOrientation, setCardOrientation] = useState("vertical");
  const isVertical = cardOrientation === "vertical";
  return (
    <AppMainContext.Provider
      value={{
        cardOrientation,
        setCardOrientation,
        isVertical,
      }}
    >
      {children}
    </AppMainContext.Provider>
  );
};

export default AppMainProvider;
