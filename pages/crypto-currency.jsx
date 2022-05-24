import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import useThemeDetector from "../utils/themeDetector";
import CryptoCurency from "../components/CryptoCurency";

export default function CryptoCurrencyPage({ startData }) {
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
        <div className="max-w-7xl mx-auto h-full w-full">
          <div className="flex flex-col z-10 pb-8 bg-white dark:bg-gray-700">
            <CryptoCurency startData={startData} />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://api.coincap.io/v2/assets?limit=50`);
  const startData = await res.json();
  return {
    props: { startData: startData.data }, // will be passed to the page component as props
  };
}
