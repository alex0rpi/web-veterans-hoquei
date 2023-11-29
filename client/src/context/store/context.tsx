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

const AuthContext = createContext<TInitialState | undefined>(undefined);

const defaultFilters: TInitialState = {
  user: null,
  dispatch: () => {},
};

const FiltersProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // ==> CREATE STATE AND DISPATCH FUNCTION
  const [state, dispatch] = useReducer(filtersReducer, defaultFilters);
  const { user } = state;

  const value = useMemo(() => ({ user, dispatch }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// ==> CUSTOM HOOK TO USE CONTEXT
const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useFiltersContext has to be used inside a FiltersProvider",
    );
  }
  return context;
};

export { FiltersProvider, useAuthContext };
