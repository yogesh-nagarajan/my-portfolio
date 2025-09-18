import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { toggleTheme } from "../store/themeSlice";
import { setActiveSection } from "../store/portfolioSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);
  const { activeSection } = useSelector((state) => state.portfolio);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/projects", label: "Projects" },
    { id: "/skills", label: "Skills" },
  ];

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set active section based on current route
    const path =
      location.pathname === "/" ? "home" : location.pathname.substring(1);
    dispatch(setActiveSection(path));
  }, [location, dispatch]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg"
          : "py-4 bg-transparent"
      } ${darkMode ? "dark" : ""}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          Portfolio
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              onClick={handleNavClick}
              className={`font-medium transition-colors ${
                (activeSection === "home" && item.id === "/") ||
                "/" + activeSection === item.id
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch(toggleTheme())}
            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                onClick={handleNavClick}
                className={`py-2 font-medium transition-colors ${
                  (activeSection === "home" && item.id === "/") ||
                  "/" + activeSection === item.id
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
