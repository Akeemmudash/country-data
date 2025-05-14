import { restCountriesInstance } from "./restCountriesInstance";

export const getCountriesByName = (name) => {
  return restCountriesInstance.get(`/name/${name}`);
};
