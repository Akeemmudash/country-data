import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../api/getAllCountries";

const useCountries = () => {
  return useQuery({ queryKey: ["countries"], queryFn: getAllCountries });
};

export { useCountries };
