import axios from "axios";

const restCountriesInstance = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

export { restCountriesInstance };
