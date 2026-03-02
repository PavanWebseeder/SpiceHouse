import { Link } from 'react-router-dom';
const Footer = () => {

  const items = [
    { link: "Home", path: "/" },
    { link: "Menu", path: "/menu" },
    { link: "About Us", path: "/about" },
    { link: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div>
            <h3
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Spice House
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Serving authentic flavors crafted with passion and the finest
              ingredients. Experience taste that feels like home.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {items.map((item,index)=>(
                <li key={index} className='cursor-pointer hover:text-white'><Link to={item.path}>{item.link}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Visit Us
            </h4>
            <p className="text-sm mb-3 leading-relaxed">
              Spice House Restaurant <br />
              Main Road, City Center <br />
              London, America
            </p>

            <p className="text-sm">
              <span className="font-semibold text-white">Timings:</span><br />
              Mon – Fri: 11:00 AM – 10:30 PM <br />
              Sat – Sun: 11:00 AM – 11:00 PM
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Spice House. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;