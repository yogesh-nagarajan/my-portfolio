// eslint-disable-next-line
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import profilePic from "../assets/profile.JPG";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white"
            >
              Hi, I'm{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Yogesh N
              </span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600 dark:text-gray-300"
            >
              Frontend Developer || AEM Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-lg"
            >
              I create beautiful, responsive web applications with modern
              technologies and elegant animations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex space-x-4"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
              >
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
              >
                View Projects
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex mt-8 space-x-4"
            >
              <motion.a
                whileHover={{ y: -5 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              >
                <FiLinkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.05, 1, 1.05, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-indigo-600 dark:bg-indigo-500 opacity-20"
              />
              <motion.div
                animate={{
                  rotate: [0, -10, 0, 10, 0],
                  scale: [1, 1.03, 1, 1.03, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="absolute inset-4 rounded-full bg-indigo-500 dark:bg-indigo-400 opacity-30"
              />
              <div className="absolute inset-8 rounded-full bg-white dark:bg-gray-800 overflow-hidden">
                <img
                  src={profilePic}
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
