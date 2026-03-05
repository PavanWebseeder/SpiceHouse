import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="relative w-full h-svh overflow-hidden">

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/foods/3196094-uhd_3840_2160_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 backdrop-blur-[2px]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-wide drop-shadow-2xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <Link to='/'>Spice House</Link>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg text-center sm:text-xl md:text-2xl max-w-2xl text-gray-200 drop-shadow-lg font-light tracking-wide"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Discover the best food & drinks crafted with authentic spices
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 bg-gradient-to-r from-amber-600 to-orange-500 text-white font-semibold text-lg px-8 py-4 rounded-full cursor-pointer transition-all duration-300 transform shadow-[0_4px_14px_0_rgba(217,119,6,0.39)] hover:shadow-[0_6px_20px_rgba(217,119,6,0.23)] active:scale-95 flex items-center gap-2 group hover:-translate-y-1"
        >
          <Link to='/menu'>View Menu</Link>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </motion.button>
      </div>

    </div>
  );
};

export default Hero;