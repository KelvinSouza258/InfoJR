import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, Results } from './components/Pages'

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/results">
                        <Results />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
