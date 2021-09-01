import { createContext, Dispatch } from 'react';

const defaultTheme: [boolean, Dispatch<React.SetStateAction<boolean>>] = [
    false,
    () => {},
];

export const ThemeContext = createContext(defaultTheme);

const defaultUser = {
    id: '',
    name: '',
    email: '',
    password: '',
};

export const UserContext = createContext<
    | {
          id: string;
          name: string;
          email: string;
          password: string;
      }
    | undefined
>(defaultUser);
