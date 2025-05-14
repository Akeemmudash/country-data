import { useCountries } from "../hooks/useCountries";
import { useFilteredCountries } from "../hooks/useFilteredCountries";
import { useAppMainContext } from "../hooks/useAppMainContext";
import Card from "./Card";
import Spinner from "./Spinner";
import { cn } from "../utils/cn";

export default function CardList() {
  const { selectedRegion, isVertical } = useAppMainContext();

  const {
    data: allCountries,
    isPending,
    isError,
    error,
  } = useCountries({ enabled: !selectedRegion?.value });
  console.log(!!selectedRegion?.value);
  const { data: FiteredData } = useFilteredCountries(selectedRegion?.value, {
    enabled: !!selectedRegion?.value,
  });

  const data = FiteredData || allCountries;
  const countryList = data?.data.slice(0, 30) || [];

  if (isPending)
    return (
      <div className="flex justify-center  h-[calc(100vh-280px)] text-gray-700 items-center">
        <Spinner />
      </div>
    );
  if (isError) return <div className="">{error.message}</div>;
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-5",
        isVertical && "vertical grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
      )}
    >
      {countryList.map((country) => (
        <Card
          name={country.name}
          capital={country.capital}
          region={country.region}
          population={country.population}
          flag={country.flags}
          isVertical={isVertical}
        />
      ))}
    </div>
  );
}
