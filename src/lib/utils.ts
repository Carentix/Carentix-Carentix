import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number as USD with no decimals, e.g. 2250 -> "$2,250". */
export function formatUSD(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}
