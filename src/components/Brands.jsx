import { brands } from "@/data/brands";
import React from "react";

const Brands = () => {
  return (
    <section className="bg-black text-white py-8 ">
      <div className="max-w-7xl mx-auto flex md:justify-between items-center gap-6  flex-wrap justify-center px-6">
        {brands.map((brand) => (
          <img src={brand.img} key={brand.id} className="" />
        ))}
      </div>
    </section>
  );
};

export default Brands;
