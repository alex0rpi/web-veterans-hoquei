// ==> ACTIONS TO MODIFY STATE
import { ActionTypes, FiltersAction, TInitialState } from "./types";

// ==> REDUCER
export const filtersReducer = (
  state: TInitialState,
  action: FiltersAction,
): TInitialState => {
  switch (action.type) {
    case ActionTypes.SetUser:
      return { ...state, user: action.payload.user };
    // case ActionTypes.SetTypes:
    //   return { ...state, types: action.payload.types };
    // case ActionTypes.SetTopics:
    //   return { ...state, topics: action.payload.topics };
    // case ActionTypes.SetStatus:
    //   return { ...state, status: action.payload.status };

    default:
      return state;
  }
};
