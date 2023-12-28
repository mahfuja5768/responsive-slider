import { useEffect } from "react";
import { useState } from "react";

import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import Slider from "./Slider";

const DisplayProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/public/product.json");
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
      <Slider>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {products?.map((item, idx) => (
            <div key={idx}>
              <div className="flex gap-2 items-center justify-center">
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
            </div>
          ))}
        </div>
      </Slider>
    </div>
  );
};

export default DisplayProducts;
