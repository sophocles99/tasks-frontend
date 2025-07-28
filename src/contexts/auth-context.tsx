import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

export type AuthContextValue = {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  return <AuthContext value={{ currentUser, setCurrentUser }}>{children}</AuthContext>;
};
