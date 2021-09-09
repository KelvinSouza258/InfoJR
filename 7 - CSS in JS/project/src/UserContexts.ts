import { createContext } from 'react';

const defaultUser = {
    id: '',
    name: '',
    email: '',
    password: '',
};

const UserContext = createContext<
    | {
          id: string;
          name: string;
          email: string;
          password: string;
      }
    | undefined
>(defaultUser);

export default UserContext;
