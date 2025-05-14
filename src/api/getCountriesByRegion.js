import { restCountriesInstance } from "./restCountriesInstance";

const getCountriesByRegion = (region) => {
  return restCountriesInstance.get(`/region/${region}`);
};

export default getCountriesByRegion;
