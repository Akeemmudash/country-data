import { motion } from "framer-motion";
import { useAppMainContext } from "../hooks/useAppMainContext";
import { cn } from "../utils/cn";
import Card from "./Card";
import Spinner from "./Spinner";
import { useCountriesDataContext } from "../hooks/useCountriesDataContext";

export default function CardList() {
  const { isVertical } = useAppMainContext();
  const { data, isErrored, isLoading, error, searchBy } =
    useCountriesDataContext();

  console.log("cardList", data?.data, searchBy);
  const countryList = data?.data.slice(0, 30) || [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full text-gray-700">
        <Spinner />
      </div>
    );
  }

  if (isErrored) {
    return (
      <div className="text-red-500 text-center p-4">
        {error?.message || "Something went wrong"}
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-5 overflow-y-auto",
        isVertical && "vertical grid-cols-2 md:grid-cols-4 "
      )}
    >
      {countryList.map((country) => (
        <Card
          name={country.name}
          capital={country.capital}
          region={country.region}
          population={country.population}
          flag={country.flags}
        />
      ))}
    </motion.div>
  );
}
