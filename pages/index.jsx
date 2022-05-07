import Image from "next/image";
import NavBar from "../components/NavBar";
import MainPage from "./MainPage";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");
  // useEffect(() => {
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, []);
  return (
    <div className={theme}>
      {/*<Head />*/}
      <main className="flex flex-col bg-white dark:bg-gray-700 h-screen">
        <NavBar />
        <div className="max-w-7xl mx-auto  h-full">
          <div className="flex flex-col z-10 pb-8 bg-white dark:bg-gray-700">
            <MainPage />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
