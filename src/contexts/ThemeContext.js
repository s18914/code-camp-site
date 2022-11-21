import { useState, createContext } from "react";

export const ThemeContext = createContext();

function ThemeProvider({startingTheme, children}) {
  const [theme, setTheme] = useState(startingTheme);

  return (
    <ThemeContext.Provider value={
      {setTheme, theme}
    }>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider };