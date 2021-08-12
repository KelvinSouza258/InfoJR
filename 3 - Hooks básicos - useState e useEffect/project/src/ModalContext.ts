import { createContext } from 'react';

const defaultValue: Array<Boolean | any> = [false, () => {}]

const ModalContext = createContext(defaultValue);

export default ModalContext;
