import { restCountriesInstance } from "./restCountriesInstance";

export const getCountriesByName = async (name) => {
  return await restCountriesInstance.get(`name/${name}`);
};
