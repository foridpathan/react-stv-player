import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (value: number) => {
  if (isNaN(value)) {
    return;
  }
  let totalSeconds = value;
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = String(Math.floor(totalSeconds / 60));
  let seconds = String(Math.floor(totalSeconds % 60));
  seconds = seconds.padStart(2, "0");
  if (hours > 0) {
    minutes = minutes.padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  } else {
    return `${minutes}:${seconds}`;
  }
};
