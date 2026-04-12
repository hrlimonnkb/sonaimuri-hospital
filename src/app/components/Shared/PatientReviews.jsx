"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import borhanImage from "@/assets/images/borhan.png";
import kamrulImage from "@/assets/images/kamrul.png"; 
import rubelImage from "@/assets/images/rubel.jpeg";
import asadImage from "@/assets/images/shiblu.png";
import shawonImage from "@/assets/images/shawon.png";
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    id: 1,
    name: "Borhan Uddin",
    type: "Regular Checkup",
    text: "I visited for a routine health checkup. The process was very smooth, and the doctors were highly professional. They took the time to explain all my test reports clearly.",
    image: borhanImage,
    rating: 5,
  },
  {
    id: 2,
    name: "Kamrul Hasan",
    type: "Father (NICU Patient)",
    text: "When our newborn needed NICU support, we were terrified. The pediatric specialists here saved our baby's life. We are forever grateful to Sonaimuri Maa O Shishu Hospital.",
    image: kamrulImage,
    rating: 5,
  },
  {
    id: 3,
    name: "Yasin Hamid Rubel",
    type: "Regular Checkup",
    text: "The consultation was excellent. I came in for some general weakness and routine tests. The doctor was very patient, listened to my concerns, and prescribed a highly effective routine.",
    image: rubelImage,
    rating: 4,
  },
  {
    id: 4,
    name: "Asaduzzaman",
    type: "Regular Checkup",
    text: "Outstanding service. The hospital is exceptionally clean, and the staff is very well-behaved. The specialist doctor accurately evaluated my health and answered all my questions during the visit.",
    image: asadImage,
    rating: 5,
  },
  {
    id: 5,
    name: "Shawon Barua",
    type: "Regular Checkup",
    text: "Booking a regular checkup here was completely hassle-free. I got all my lab tests done quickly, and the diagnostic center is equipped with top-notch technology. Highly recommended.",
    image: shawonImage,
    rating: 5,
  }
];

export default function PatientReviews() {
  return (
    <section id='testimonials' className="py-14 lg:py-24 bg-[#FAFAFE] relative overflow-hidden px-5">
      <div className="max-width-wrapper relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#916BBF] font-bold text-xs md:text-sm uppercase tracking-[0.3em] block mb-3">
            Testimonials
          </span>
          <h2 className="text-[#512D6D] text-2xl md:text-5xl font-black mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Real stories and feedback from families who have trusted us with their maternal and pediatric care.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="review-slider-container pb-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.review-pagination',
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="h-full"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="h-auto pb-4 pt-4 px-2">
                <div className="bg-white border border-gray-100 rounded-4xl p-8 h-full flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:border-[#D3BFDF] hover:shadow-[0_20px_40px_rgba(81,45,109,0.08)]">
                  
                  {/* Quote Icon */}
                <FaQuoteRight className="absolute top-8 md:top-4 right-8 text-2xl md:text-6xl text-[#D3BFDF] opacity-30 group-hover:opacity-60 group-hover:rotate-12 transition-all duration-500 z-0 pointer-events-none" />

                  {/* Review Content */}
                  <div className="relative z-10 grow">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, index) => (
                        <FaStar 
                          key={index} 
                          className={`text-lg ${index < review.rating ? 'text-yellow-400' : 'text-gray-200'}`} 
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed italic mb-8 relative z-20">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Patient Info */}
                  <div className="relative z-20 flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                    
                    {/* Avatar Fallback System */}
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-linear-to-br from-[#512D6D] to-[#916BBF] border-2 border-white shadow-md shrink-0 flex items-center justify-center">
                      {review.image ? (
                        <Image 
                          src={review.image} 
                          alt={review.name}
                          width={56}
                          height={56}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <span className="text-white font-black text-xl">
                          {review.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    
                    <div>
                      <h4 className="text-[#512D6D] font-black text-base leading-tight">{review.name}</h4>
                      <p className="text-[#916BBF] text-[10px] font-bold uppercase tracking-widest mt-1">{review.type}</p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Standard Dots Pagination */}
          <div className="review-pagination flex justify-center items-center gap-3 mt-10"></div>
        </div>
      </div>
    </section>
  );
}