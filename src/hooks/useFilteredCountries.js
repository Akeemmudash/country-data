import { useQuery } from "@tanstack/react-query";
import getCountriesByRegion from "../api/getCountriesByRegion";

export const useFilteredCountries = (region, ...options) => {
  return useQuery({
    queryKey: ["countries", "region", region],
    queryFn: () => getCountriesByRegion(region),
    ...options,
  });
};
