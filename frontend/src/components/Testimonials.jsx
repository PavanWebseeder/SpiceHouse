import { Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';
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
    <div className="mt-20 px-4">
        
        <h2 className="text-center text-2xl font-bold text-blue-500 mb-10"
        style={{fontFamily:'var(--font-heading)'}}>
            What Our Customers Say
        </h2>

        <div className="max-w-7xl mx-auto shadow-2xl">
            <Swiper 
            modules={[Autoplay,Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{delay:4000}}
            pagination={{clickable:true}}
            breakpoints={{
                768:{slidesPerView:1},
                1024:{slidesPerView:1},
            }}>
                {testimonials.map((t,index)=>(
                    <SwiperSlide key={index}>
                        <div className='bg-white p-8 rounded-lg shadow-md border h-full'>
                            <div className='flex justify-center mb-3'>
                                {[...Array(t.rating)].map((_,i)=>(
                                    <FaStar key={i} className='text-yellow-400 mr-1 '/>
                                ))}
                            </div>

                            <p className='text-gray-400 mb-4 text-center leading-relaxed'
                            style={{fontFamily:'var(--font-body)'}}>
                                "{t.review}"
                            </p>

                            <h4 className='font-semibold text-gray-600 text-center'
                            style={{fontFamily:'var(--font-heading)'}}>
                                {t.name}
                            </h4>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  );
};

export default Testimonials;
