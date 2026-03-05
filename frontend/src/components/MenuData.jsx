import { menu } from "../data/menudata";

const MenuData = () => {
  return (
  <div className="mt-24">
    <div className="max-w-7xl mx-auto px-4">


      <div className="grid md:grid-cols-3 gap-8">
        {menu.map((m) => (
          <div key={m.id}>
            <img
              src="/foods/img2.jpg"
              alt={m.name}
              className="w-full h-96 object-cover rounded-lg hover:scale-105 cursor-pointer"
            />
            <h3 className="text-xl font-bold mt-4">{m.name}</h3>
            <p className="text-gray-600">{m.description}</p>
            <p className="text-amber-600 font-semibold mt-2">{m.price}</p>
          </div>
        ))}
      </div>

    </div>
  </div>
);
};

export default MenuData;
