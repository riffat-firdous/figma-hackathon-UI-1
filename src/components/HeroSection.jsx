import React from "react";

const HeroSection = () => {
  return (
    <section
      className="h-[663px] bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/Rectangle.png')`,
      }}
    >
      <div className="text-black h-full mx-32">
        <div className="mx-auto flex flex-col md:flex-row items-center px-6 justify-between h-full">
          <div className="md:w-[596px] text-center md:text-left ">
            <h1 className="font-extrabold text-5xl mb-4">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="mb-6 ">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="bg-black text-white py-3 rounded-full px-16">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
