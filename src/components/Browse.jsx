import Image from "next/image";
import React from "react";

const Browse = () => {
  return (
    <section className="py-16 bg-white  mx-32">
      <div className="bg-[#F0F0F0] p-8 rounded-[40px] md:m-12  ">
        <h1 className="text-5xl my-[70px] font-bold text-black text-center mb-6">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex gap-2">
            {/* Casual */}
            <Image height={289} width={407} src="/assets/casual.png" alt="" />
            {/* <div
            className="bg-cover bg-center h-40 flex items-center justify-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/assets/casual.png')" }}
          >
          </div> */}

            {/* Formal */}
            <Image height={289} width={684} src="/assets/formal.png" alt="" />

            {/* <div
            className="bg-cover bg-center h-40 flex items-center justify-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/assets/formal.png')" }} 
          >
            <span className="text-white font-bold text-lg bg-black bg-opacity-50 px-4 py-2 rounded">
              Formal
            </span>
          </div> */}
          </div>
          <div className="flex gap-2">
            {/* Party */}
            <Image height={289} width={684} src="/assets/party.png" alt="" />

            {/* <div
            className="bg-cover bg-center h-40 flex items-center justify-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/assets/party.png')" }}
          >
            <span className="text-white font-bold text-lg bg-black bg-opacity-50 px-4 py-2 rounded">
              Party
            </span>
          </div> */}

            {/* Gym */}
            <Image height={289} width={407} src="/assets/gym.png" alt="" />

            {/* <div
            className="bg-cover bg-center h-40 flex items-center justify-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/assets/gym.png')" }}
          >
            <span className="text-white font-bold text-lg bg-black bg-opacity-50 px-4 py-2 rounded">
              Gym
            </span>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browse;
