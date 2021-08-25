import { useState } from 'react';
import logo from './assets/logo.svg';
import Form from './components/Form';
import ModalContext from './ModalContext';
import './styles/styles.css';

function App() {
    const modalHook = useState(false);

    return (
        <ModalContext.Provider value={modalHook}>
            <div className="App">
                <div className="logo-section">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        CNAME
                    </div>
                </div>
                <Form />
            </div>
        </ModalContext.Provider>
    );
}

export default App;
