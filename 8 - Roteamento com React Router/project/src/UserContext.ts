import { createContext } from 'react';

const defaultUser = {
    id: '',
    name: '',
    email: '',
    password: '',
    projectProgress: 0,
    codeQuality: 0,
};

const UserContext = createContext<
    | {
          id: string;
          name: string;
          email: string;
          password: string;
          projectProgress: number;
          codeQuality: number;
      }
    | undefined
>(defaultUser);

export default UserContext;
