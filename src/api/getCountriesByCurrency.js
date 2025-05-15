import { restCountriesInstance } from "./restCountriesInstance";

export const getCountriesByCurrency = async(currency) => {
  return await restCountriesInstance.get(`currency/${currency}`);
};
