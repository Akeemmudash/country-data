import { useQuery } from "@tanstack/react-query";
import { getCountriesByName } from "../api/getCountriesByName";
import { getCountriesByCurrency } from "../api/getCountriesByCurrency";
import { getCountriesByLanguage } from "../api/getCountriesByLanguage";
import { getCountriesByCapital } from "../api/getCountriesByCapital";

const getSearchFunction = (searchBy) => {
  switch (searchBy) {
    case "name":
      return getCountriesByName;
    case "currency":
      return getCountriesByCurrency;
    case "language":
      return getCountriesByLanguage;
    case "capital":
      return getCountriesByCapital;
    default:
      return getCountriesByName;
  }
};

const useSearchCountriesQuery = (searchTerm, searchBy, options) => {
  return useQuery({
    queryKey: ["search", "country", searchBy, searchTerm],
    queryFn: () => getSearchFunction(searchBy)(searchTerm),
    retry: 1,
    ...options,
  });
};

export { useSearchCountriesQuery };
