export type TUser = {
  //   id: string;
  //   name: string;
  //   email: string;
  isLoggedIn: boolean;
};

export type TInitialState = {
  user: TUser | null;
  dispatch: React.Dispatch<FiltersAction>;
};

export enum ActionTypes {
  SetUser = "SET_USER",
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export const Actions = {
  [ActionTypes.SetUser]: { user: {} as TUser },
};

export type FiltersAction = ActionMap<typeof Actions>[keyof ActionMap<
  typeof Actions
>];
