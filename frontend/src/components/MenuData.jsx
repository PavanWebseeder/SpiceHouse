import { menu } from "../data/menudata";
import { useSelector } from "react-redux";

const MenuData = () => {

    const category = useSelector((state)=>state.menu.category);

    const filteredMenu = category === 'All' ? menu : menu.filter((m)=>m.category === category)
  return (
  <div className="mt-24">
    <div className="max-w-7xl mx-auto px-4">


      <div className="grid md:grid-cols-3 gap-8">
        {filteredMenu.map((m) => (
          <div key={m.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 border border-gray-200">
            <img
              src="/foods/img2.jpg"
              alt={m.name}
              className="w-full h-96 object-cover hover:scale-105 transition duration-300"
            />
            <h3 className="text-xl p-1 font-bold mt-4">{m.name}</h3>
            <h2 className="text-sm text-gray-500 p-1">{m.category}</h2>
            <p className="text-gray-600 p-1">{m.description}</p>
            <p className="text-amber-600 p-1 font-semibold mt-2">{m.price}</p>
          </div>
        ))}
      </div>

    </div>
  </div>
);
};

export default MenuData;
