import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const { darkMode } = useSelector((state) => state.theme);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <footer className="py-8 text-center text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <p>
              © {new Date().getFullYear()} Your Portfolio. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
