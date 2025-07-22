import { useContext } from 'react';

import { AuthContext, AuthContextType } from '../contexts/auth-context';

export const useAuth = (): AuthContextType => {
  
  return useContext(AuthContext);
};
