import { FaMotorcycle, FaShoppingBag, FaUtensils, FaWifi } from "react-icons/fa";

const Amenities = () => {
    const amenities = [
        { title: 'Home Delivery', icon: <FaMotorcycle /> },
        { title: 'Take Away', icon: <FaShoppingBag /> },
        { title: 'Dine In', icon: <FaUtensils /> },
        { title: 'Free Wi Fi', icon: <FaWifi /> }
    ]

    return (
        <div className="mt-28 bg-white/60 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h3 className="text-center text-4xl font-bold text-amber-600 mb-2 tracking-wider"
                    style={{ fontFamily: 'var(--font-heading)' }}>Amenities</h3>
                <div className="w-24 h-1 bg-amber-500 mx-auto rounded mb-16"></div>

                <div className="grid gap-12 grid-cols-2 lg:grid-cols-4 place-items-center">

                    {amenities.map((a, index) => (
                        <div key={index} className="flex flex-col items-center group cursor-pointer">

                            <div className="bg-amber-100 text-amber-600 rounded-full flex items-center justify-center w-24 h-24 text-3xl group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:-translate-y-2">
                                {a.icon}
                            </div>

                            <span className="mt-6 text-gray-700 font-medium text-lg text-center leading-tight tracking-wide group-hover:text-amber-600 transition-colors"
                                style={{ fontFamily: 'var(--font-body)' }}>{a.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Amenities;