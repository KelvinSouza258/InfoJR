import logo from './assets/logo.svg';
import Form from './components/Form';
import './styles/styles.css';

function App() {
    return (
        <div className="App">
            <div className="logo">
                <img src={logo} alt="logo" />
                CNAME
            </div>
            <Form />
        </div>
    );
}

export default App;
