import { createContext, useState } from 'react';

export type TUser = {
  id: string;
  name: string;
};

export interface IUserContext {
  user: TUser;
  // setUser: (user: TUser) => void;
  setUser: React.Dispatch<React.SetStateAction<TUser>>;
}

const defaultState = {
  user: {
    id: '',
    name: '',
  },
  setUser: () => {},
} as IUserContext;

// export const UserContext = createContext<Partial<IUserContext>>({})
export const UserContext = createContext(defaultState);

type TUserProviderProps = {
  children: React.ReactNode;
};

export default function UserProvider({ children }: TUserProviderProps) {
  const [user, setUser] = useState<TUser>({
    id: '',
    name: '',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
}
