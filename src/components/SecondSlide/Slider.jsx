import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Slider = () => {
    const [products, setProducts] = useState();
      const [swiper, setSwiper] = useState(null);


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
        <div className="flex justify-center gap-8 mb-6">
          <h2 className="text-2xl font-bold">Best Seller</h2>
          <div
            className="swiper-pagination"
            style={{ top: "10px", zIndex: 1 }}
          />
          <div /> <button onClick={() => swiper.slidePrev()}>Prev</button>
          <button onClick={() => swiper.slideNext()}>Next</button>
        </div>
        <hr />
        <Swiper
        
          slidesPerView={1}
          spaceBetween={10}
          onSwiper={(swiper) => setSwiper(swiper)}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper my-6"
        >
          {products?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex gap-8 items-center justify-center">
                <img
                  width={100}
                  height={100}
                  className="flex  hover:contrast-50  m-5 cursor-pointer"
                  src={item.image_url}
                  alt={item.title}
                />
                <div className="space-y-1 pb-5">
                  <Rating
                    style={{ maxWidth: 70 }}
                    value={item.rating}
                    readonly
                  />
                  <h2 className="text-2xl xfont-bold">{item.title}</h2>
                  <h3 className="text-[#d3866c] font-bold text-2xl">
                    ${item.price}
                  </h3>
                  <p className="w-full">{item.short_description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>{" "}
      </div>
    );
};

export default Slider;