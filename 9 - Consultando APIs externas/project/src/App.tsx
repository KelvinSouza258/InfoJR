import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Button } from './components/Atoms'
import { SearchForm } from './components/Molecules'
import { Home, Results } from './components/Templates'

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
                        <SearchForm />
                        <Button>Opa</Button>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
