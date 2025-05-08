import { clsx } from "clsx";
import { twMerge } from "tw-merge";

export const cn = (...classes) => {
  return twMerge(clsx(...classes));
};
