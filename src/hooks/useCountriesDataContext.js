import { useContext } from "react";
import { CountryDataContext } from "../contexts/CountryDataContext";

export const useCountriesDataContext = () => {
  return useContext(CountryDataContext);
};
