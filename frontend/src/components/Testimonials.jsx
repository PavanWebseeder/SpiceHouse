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

        <h2 className="text-center text-4xl font-bold text-amber-600 mb-2"
          style={{ fontFamily: 'var(--font-heading)' }}>
          What Our Customers Say
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded mb-16"></div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-12"
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}>
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className='bg-white p-10 rounded-2xl shadow-sm border border-orange-50/50 hover:shadow-xl transition-shadow duration-300 mx-2 mb-2'>
                  <div className='flex justify-center mb-6'>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`text-xl ${i < t.rating ? 'text-amber-400' : 'text-gray-200'} mx-1`} />
                    ))}
                  </div>

                  <p className='text-gray-600 mb-8 text-center text-xl italic leading-relaxed font-light'
                    style={{ fontFamily: 'var(--font-body)' }}>
                    "{t.review}"
                  </p>

                  <div className="flex items-center justify-center flex-col">
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
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
