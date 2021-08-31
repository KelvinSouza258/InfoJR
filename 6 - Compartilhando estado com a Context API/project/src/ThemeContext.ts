import { createContext, Dispatch } from 'react';

const defaultValue: [boolean, Dispatch<React.SetStateAction<boolean>>] = [
    false,
    () => {},
];

const ThemeContext = createContext(defaultValue);

export default ThemeContext;
