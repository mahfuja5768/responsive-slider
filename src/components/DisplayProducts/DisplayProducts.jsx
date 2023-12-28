import { useEffect } from "react";
import { useState } from "react";

import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const DisplayProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("product.json");
        const data = await res.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-12 px-4">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        {" "}
        <div className="">
          {" "}
          {products?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex gap-8 items-center justify-center">
                <img
                  width={250}
                  height={250}
                  className="flex  hover:contrast-50  m-5 cursor-pointer"
                  src={item.image_url}
                  alt={item.title}
                />
                <div className="space-y-3">
                  <Rating
                    style={{ maxWidth: 70 }}
                    value={item.rating}
                    readonly
                  />
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <h3 className="text-[#d3866c] font-bold text-2xl">
                    ${item.price}
                  </h3>
                  <p className="w-full">{item.short_description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default DisplayProducts;
