import { useState } from "react";

function useTheme(startingTheme="light") {

  const [theme, setTheme] = useState(startingTheme);

  function validateTheme(themeValue) {
    if(themeValue === "light"){
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return {
    theme,
    setTheme: validateTheme,
  }
}

export default useTheme;