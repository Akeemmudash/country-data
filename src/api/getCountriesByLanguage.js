import { restCountriesInstance } from "./restCountriesInstance";

export const getCountriesByLanguage = async (language) => {
  return await restCountriesInstance.get(`lang/${language}`);
};
