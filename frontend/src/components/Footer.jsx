import { Link } from 'react-router-dom';
import { navLinks } from '../constant/Nav_config';
import { motion } from "framer-motion";
const Footer = () => {


  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-slate-900 text-slate-300 mt-28 border-t border-amber-500/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          <div>
            <h3
              className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Spice House
            </h3>
            <p
              className="text-sm leading-relaxed text-slate-400"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Serving authentic flavors crafted with passion and the finest
              ingredients. Experience taste that feels like home.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-6 border-b border-slate-700 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((item, index) => (
                <li key={index} className='transition-transform transform hover:translate-x-1 '>
                  <Link to={item.path} className="hover:text-amber-500 transition-colors flex items-center gap-2">
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-6 border-b border-slate-700 pb-2 inline-block">
              Visit Us
            </h4>
            <p className="text-sm mb-4 leading-relaxed text-slate-400">
              Spice House Restaurant <br />
              Main Road, City Center <br />
              London, America
            </p>

            <p className="text-sm text-slate-400">
              <span className="font-semibold text-amber-500">Timings:</span><br />
              Mon – Fri: 11:00 AM – 10:30 PM <br />
              Sat – Sun: 11:00 AM – 11:00 PM
            </p>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Spice House. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;