import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../Constants";
import { Link } from "react-router-dom";

const MostPopularFood = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[900px] bg-[#000]">
      <h2 className="text-[2.5rem] text-[#FFE0AE] mb-[3rem]">Most Popular <span>Food</span></h2>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 4000}}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <Link to='/menu'>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <div className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" >{item.img}</div>
                <h1 className="text-xl lg:text-2xl text-[#FFE0AE] mb-[3rem]">{item.title} </h1>
                <p className="lg:text-[18px] text-[#FFE0AE]">{item.content} </p>
              </div>
              
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
              </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MostPopularFood;
