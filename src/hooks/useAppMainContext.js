import { useContext } from "react";
import { AppMainContext } from "../contexts/AppMainContext";

export const useAppMainContext = () => {
  return useContext(AppMainContext);
};
