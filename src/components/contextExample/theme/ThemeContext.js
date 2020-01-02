import React, { useContext, useState } from "react";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext(themes);
export default function ThemeComponent() {
    return (
        <ThemeContext.Provider value={themes}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const [theme, setTheme] = useState('light');
    const themeContenxt = useContext(ThemeContext);

    const switchTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }



    return (
        <button onClick={switchTheme} style={{ background: themeContenxt[theme].background, color: themeContenxt[theme].foreground }}>
            I am styled by theme context!
            click me to switch theme
    </button>
    );
}
