import NavBar from "../components/NavBar";
import Main from "./Main";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import useThemeDetector from "../utils/themeDetector";

export default function Home() {
  const isDarkTheme = useThemeDetector();
  const [theme, setTheme] = useState();
  useEffect(() => {
    setTheme(isDarkTheme);
  }, [isDarkTheme]);

  const setLocalTheme = (result) => {
    setTheme(result);
    localStorage.theme = result ? "dark" : "light";
  };

  return (
    <div className={theme ? "dark" : "light"}>
      {/*<Head />*/}
      <main className="flex flex-col bg-white dark:bg-gray-700">
        <NavBar theme={theme} setTheme={setLocalTheme} />
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex flex-col z-10 pb-8 bg-white dark:bg-gray-700">
            <Main />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
