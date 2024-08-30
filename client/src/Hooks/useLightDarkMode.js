import { useEffect, useState } from "react"

const useLightDarkMode = () => {

    const useLocalStorage = ( key, defaultValue ) => {
        const [value, setValue] = useState( () => {
            let currentValue;
    
            try {
                currentValue = JSON.parse( localStorage.getItem(key) || String(defaultValue) );
            } catch (error) {
                currentValue = defaultValue;
            }
            return currentValue;
        });
        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value));
        },[key, value])
        
        return [value, setValue]
    }

    const [theme, setTheme] = useLocalStorage('theme', 'light');

    const handleToggleTheme = () => {
        setTheme( theme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        handleToggleTheme();
    },[])
    
    return {
        theme,
        handleToggleTheme
    }
}





export default useLightDarkMode;