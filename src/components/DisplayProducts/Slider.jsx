import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Slider = ({ children }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      slidesPerView={1}
      spaceBetween={6}
    >
      <SwiperSlide>{children}</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
