import { restCountriesInstance } from "./restCountriesInstance";

const getAllCountries = async () => {
  return await restCountriesInstance.get("all", {
    params: {
      fields: "name,population,region,flags,capital",
    },
  });
};

export { getAllCountries };
