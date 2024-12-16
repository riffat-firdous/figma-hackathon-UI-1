import React from "react";
import ProductCard from "./common/ProductCard";
import { topSellingProducts } from "@/data/products";

const TopSelling = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl uppercase text-black font-bold mb-6 text-center">
          Top Selling
        </h2>
        <div className="grid grid-rows-1 grid-flow-col scale-95 md:scale-100 overflow-x-auto">
          {topSellingProducts.map((item, index) => (
            <ProductCard
              key={index}
              image={item.img}
              title={item.name}
              rating={item.rating}
              originalPrice={item.price}
              discountedPrice={340}
              discount={item.discount}
            />
          ))}
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="border-[1px] px-12 py-3 rounded-full">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
