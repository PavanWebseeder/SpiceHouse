import { motion } from "framer-motion";

const Intro = () => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col mt-32 px-4 max-w-4xl mx-auto items-center relative"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
            <h2 className="text-center text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 mb-4 tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}>Welcome to Spice House</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full my-4"></div>
            <span className="text-center text-lg md:text-xl text-amber-600/80 tracking-[0.2em] font-medium uppercase mb-8"
                style={{ fontFamily: 'var(--font-heading)' }}>Taste of the Town</span>
            <p className="text-center text-lg md:text-xl text-gray-600 leading-relaxed font-light"
                style={{ fontFamily: 'var(--font-body)' }}>At Spice House, we believe great food starts with quality ingredients and authentic recipes. Our chefs carefully craft every dish to deliver rich aroma, balanced spices, and unforgettable taste. Whether you’re dining with family or friends, we promise a warm ambiance and exceptional service. Come and enjoy a dining experience where every meal feels special.</p>
        </motion.div>
    );
};

export default Intro;