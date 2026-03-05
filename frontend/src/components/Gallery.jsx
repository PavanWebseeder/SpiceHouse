import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "/foods/img1.jpg",
    "/foods/img2.jpg",
    "/foods/img3.jpg",
    "/foods/img4.jpg",
    "/foods/img5.jpg",
    "/foods/img6.jpg",
    "/foods/img7.jpg",
    "/foods/img8.jpg",
    "/foods/img9.jpg",
  ];

  return (
    <div className="mt-28 max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3
          className="text-amber-600 text-center text-4xl font-bold tracking-wider mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Gallery
        </h3>
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded mb-12"></div>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className="aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group relative"
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10 pointer-events-none"></div>
            <img
              src={image}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out cursor-pointer"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
