import { motion } from "framer-motion";

const Serve = () => {

    const items = [
        {
            image: '/starter.jpg',
            title: 'Starters',
            description: 'Relish our wide range of lip smacking starters. '
        },
        {
            image: '/main course.jpg',
            title: 'Main Course',
            description: 'Tantalise your taste buds with our wide variety of main course.'
        },
        {
            image: 'dessert.jpg',
            title: 'Desserts',
            description: 'Satiate your palate and take yourself on a culinary treat.'
        },
        {
            image: 'drinks.jpg',
            title: 'Drinks',
            description: 'Try the most authentic and refreshing drink at our restaurant.'
        }
    ];

    return (
        <div className="mt-28 max-w-7xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-center text-4xl font-bold text-amber-600 mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}>We Serve</h2>
                <div className="w-24 h-1 bg-amber-500 mx-auto rounded mb-12"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        key={idx}
                        className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group cursor-pointer border border-orange-100"
                    >
                        <div className="overflow-hidden">
                            <img src={item.image} className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"></img>
                        </div>
                        <div className="p-6 flex flex-col items-center">
                            <h3 className="text-center text-2xl font-semibold text-amber-600 mb-3"
                                style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                            <p className="text-center text-gray-500"
                                style={{ fontFamily: 'var(--font-body)' }}>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Serve;