import { useEffect, useState } from "react";

const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState();
  let mqListener;

  useEffect(() => {
    const getCurrentTheme = () => {
      if (localStorage.theme === "dark") {
        return true;
      }
      if (localStorage.theme === "light") {
        return false;
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return true;
      } else {
        return false;
      }
    };
    mqListener = (e) => {
      setIsDarkTheme(e.matches);
    };
    setIsDarkTheme(getCurrentTheme);
  }, []);

  // useEffect(() => {
  //   const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  //   darkThemeMq.addListener(mqListener);
  //   return () => darkThemeMq.removeListener(mqListener);
  // }, []);
  return isDarkTheme;
};

export default useThemeDetector;
