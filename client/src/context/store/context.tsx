import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { filtersReducer } from "./reducer";
import { TInitialState } from "./types";

const FiltersContext = createContext<TInitialState | undefined>(undefined);

const defaultFilters: TInitialState = {
  user: null,
  dispatch: () => {},
};

const FiltersProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // ==> CREATE STATE AND DISPATCH FUNCTION
  const [state, dispatch] = useReducer(filtersReducer, defaultFilters);
  const { user } = state;

  const value = useMemo(() => ({ user, dispatch }), [user]);

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};

// ==> CUSTOM HOOK TO USE CONTEXT
const useFiltersContext = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error(
      "useFiltersContext has to be used inside a FiltersProvider",
    );
  }
  return context;
};

export { FiltersProvider, useFiltersContext };
