import { Link } from 'react-router-dom';
import { HiMenu,HiX} from 'react-icons/hi';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const items = [
    { link: "Home", path: "/" },
    { link: "Menu", path: "/menu" },
    { link: "About Us", path: "/about" },
    { link: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="border-b border-gray-300">
 
      <div className="mx-4 flex items-center justify-between py-3">
      
        <h1
          className="text-2xl text-blue-500 tracking-wide"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Spice House
        </h1>

        <ul
          className="hidden lg:flex gap-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="cursor-pointer hover:text-blue-500"
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden text-3xl text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <div
        className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul
          className="flex flex-col items-center gap-6 py-6 text-gray-700"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="hover:text-blue-500"
                onClick={() => setOpen(false)}
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;