import { CookiesProvider } from 'react-cookie';
import DashBoard from './components/Dashboard';
import Login from './components/Login';
import './App.css';

function App() {
    return (
        <CookiesProvider>
            <div className="App">
                <label className="dark-mode-input">
                    <input type="checkbox" />
                    Dark Mode
                </label>
                <Login />
                <DashBoard />
            </div>
        </CookiesProvider>
    );
}

export default App;
