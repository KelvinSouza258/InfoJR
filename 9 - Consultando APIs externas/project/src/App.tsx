import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom'

import { ReactComponent as Logo } from './assets/logo.svg'
import ErrorBoundary from './components/ErrorBoundary'
import { Home, Results } from './components/Pages'

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <ErrorBoundary>
                    <Logo />
                    <Switch>
                        <Route path="/results/:slug/:status">
                            <Results />
                            <div></div>
                        </Route>
                        <Route path="/">
                            <Redirect to="/" />
                            <Home />
                            <div></div>
                        </Route>
                    </Switch>
                </ErrorBoundary>
            </Router>
        </div>
    )
}

export default App
