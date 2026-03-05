import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { HiMenu, HiX } from 'react-icons/hi';
import { useState } from 'react';
import { navLinks } from '../constant/Nav_config';

const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm transition-all duration-300"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <Link to="/" className="flex-shrink-0">
            <h1
              className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Spice House
            </h1>
          </Link>

          <ul
            className="hidden lg:flex space-x-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="relative text-gray-700 hover:text-amber-600 font-medium text-lg transition-colors duration-300 group py-1"
                >
                  {item.link}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="lg:hidden text-3xl text-gray-700 hover:text-amber-600 transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-white/95 backdrop-blur-md border-b border-orange-100 overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul
          className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium text-sm"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {navLinks.map((item, index) => (
            <li key={index} className="w-full text-center">
              <Link
                to={item.path}
                className="block w-full py-2 hover:text-amber-600 hover:bg-orange-50/50 rounded-lg transition-all duration-300"
                onClick={() => setOpen(false)}
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;