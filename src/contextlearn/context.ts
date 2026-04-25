import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

// tuple type: [state, setter]
export type NameContextType = [
  string,
  Dispatch<SetStateAction<string>>
];

export const NameContext = createContext<NameContextType>([
  "",
  () => {}, // placeholder (never actually used)
]);