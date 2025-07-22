import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

export type AuthContextType = {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const defaultAuthContext: AuthContextType = {
  currentUser: null,
  setCurrentUser: () => {},
};

export const AuthContext = createContext(defaultAuthContext);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  return <AuthContext value={{ currentUser, setCurrentUser }}>{children}</AuthContext>;
};
