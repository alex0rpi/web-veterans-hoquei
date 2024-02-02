import { createContext, useState } from 'react';
import { TUser } from '../types/Item-types';

export interface IUserContext {
  user: TUser;
  // setUser: (user: TUser) => void;
  setUser: React.Dispatch<React.SetStateAction<TUser>>;
}

const defaultState = {
  user: {
    id: '',
    name: '',
    isVerified: false,
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
    isVerified: false,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
}
