import { restCountriesInstance } from "./restCountriesInstance";

export const getCountriesByCapital = async (capital) => {
  return await restCountriesInstance.get(`capital/${capital}`);
};
