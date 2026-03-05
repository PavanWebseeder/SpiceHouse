import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      review:
        "The food at Spice House is absolutely delicious. Authentic flavors and great service. Highly recommended!",
      rating: 3,
    },
    {
      name: "Priya Patel",
      review:
        "Loved the ambience and taste. Every dish felt fresh and full of flavor. Will definitely visit again.",
      rating: 4,
    },
    {
      name: "Amit Verma",
      review:
        "Great place for family dining. The spices are well balanced and the staff is very friendly.",
      rating: 5,
    },
  ];

  return (
    <div className="mt-28 py-16 bg-white/60">
      <div className="max-w-7xl mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold text-amber-600 mb-2"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          What Our Customers Say
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-amber-500 mx-auto rounded mb-16"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true, }}
            className="testimonial-swiper"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index} className=''>
                <div className='bg-white/90 backdrop-blur-sm min-h-[320px] relative p-10 rounded-2xl shadow-md border border-orange-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 mx-2 mb-6 mt-4 overflow-hidden group flex flex-col justify-between'>
                  <div className="absolute top-0 left-4 text-8xl text-amber-500/10 font-serif leading-none group-hover:text-amber-500/20 transition-colors duration-300 rotate-180">"</div>

                  <div className='relative z-10'>
                    <div className='flex justify-center mb-6'>
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`text-xl ${i < t.rating ? 'text-amber-400' : 'text-gray-200'} mx-1 drop-shadow-sm`} />
                      ))}
                    </div>

                    <p className='text-gray-600 mb-8 text-center text-base md:text-xl italic leading-relaxed font-light'
                      style={{ fontFamily: 'var(--font-body)' }}>
                      "{t.review}"
                    </p>
                  </div>

                  <div className="flex items-center justify-center flex-col relative z-10">
                    <div className="w-12 h-1 bg-amber-200 rounded mb-4"></div>
                    <h4 className='text-lg font-bold text-amber-700 text-center tracking-wide'
                      style={{ fontFamily: 'var(--font-heading)' }}>
                      {t.name}
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
