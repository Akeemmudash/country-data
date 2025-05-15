import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../api/getAllCountries";

const useCountries = (options) => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
    ...options,
  });
};

export { useCountries };
