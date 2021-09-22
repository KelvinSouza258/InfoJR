import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { ThemeProvider } from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import usePersistentTheme from './hooks/usePersistentTheme'
import useLoginMsg from './hooks/useLoginPopUp'
import DashBoard from './components/Dashboard'
import Login from './components/Login'
import Popup from './components/PopupLogin'
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import { GlobalStyle, App as StyledApp } from './styles/global'
import UserContext from './hooks/UserContext'
import NavBar from './components/Nav'
import users from './users'
import Profile from './components/Profile'

const App = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState<
        | {
              id: string
              name: string
              email: string
              password: string
              projectProgress: number
              codeQuality: number
          }
        | undefined
    >({
        id: '',
        name: '',
        email: '',
        password: '',
        projectProgress: 0,
        codeQuality: 0
    })
    const [cookies] = useCookies(['token'])
    const [theme, setTheme] = usePersistentTheme()
    const { msgVisible, success, showLoginMsg } = useLoginMsg()

    useEffect(() => {
        if (cookies.token) {
            const id = window.atob(cookies.token)
            setUser(users.find((user) => user.id === id))
        }
    }, [cookies.token])

    return (
        <ThemeProvider theme={theme === 'dark' ? dark : light}>
            <UserContext.Provider value={user}>
                <GlobalStyle />
                <Router>
                    <StyledApp>
                        <NavBar
                            showLoginMsg={showLoginMsg}
                            email={email}
                            password={password}
                            themeState={[theme, setTheme]}
                        />
                        <Switch>
                            <Route path="/login">
                                {cookies.token ? (
                                    <Redirect to="/dashboard" />
                                ) : (
                                    <Redirect to="/login" />
                                )}
                                <Login
                                    showLoginMsg={showLoginMsg}
                                    email={email}
                                    setEmail={setEmail}
                                    password={password}
                                    setPassword={setPassword}
                                />
                                <Popup
                                    msgVisible={msgVisible}
                                    success={success}
                                />
                            </Route>
                            <Route path="/dashboard">
                                {cookies.token ? null : (
                                    <Redirect to="/login" />
                                )}
                                <DashBoard />
                            </Route>
                            <Route path="/profile">
                                {cookies.token ? null : (
                                    <Redirect to="/login" />
                                )}
                                <Profile />
                            </Route>
                            <Route path="/">
                                {cookies.token ? (
                                    <Redirect to="/dashboard" />
                                ) : (
                                    <Redirect to="/login" />
                                )}
                            </Route>
                        </Switch>
                    </StyledApp>
                </Router>
            </UserContext.Provider>
        </ThemeProvider>
    )
}

export default App
