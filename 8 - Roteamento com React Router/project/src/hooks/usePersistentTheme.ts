import { useState, useLayoutEffect } from 'react'

const usePersistentTheme = () => {
    const themeHook = useState('')
    const [, setTheme] = themeHook

    useLayoutEffect(() => {
        const persistentTheme = localStorage.getItem('theme')

        setTheme(persistentTheme || 'dark')
    }, [])

    return themeHook
}

export default usePersistentTheme
