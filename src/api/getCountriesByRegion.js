import { restCountriesInstance } from "./restCountriesInstance";

const getCountriesByRegion = async (region) => {
  return await restCountriesInstance.get(`region/${region}`);
};

export default getCountriesByRegion;
