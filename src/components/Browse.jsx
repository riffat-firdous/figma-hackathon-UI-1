const Browse = () => {
  return (
    <section className="py-16 bg-white  mx-32">
      <div className="bg-[#F0F0F0] p-8 rounded-[40px] md:m-12  ">
        <h1 className="text-5xl my-[70px] font-bold text-black text-center mb-6">
          BROWSE BY DRESS STYLE
        </h1>

        <div className="  h-full py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              {/* <!-- image - start --> */}
              <a
                href="#"
                className="group  relative flex h-48 items-end overflow-hidden rounded-lg  md:h-80"
              >
                <img
                  src="/assets/casual.png"
                  loading="lazy"
                  alt="casual"
                  className="transform scale-x-[-1]  absolute inset-0 h-full w-full object-center transition duration-200 "
                />

                <span className=" font-bold text-lg relative ml-4 mb-3 inline-block   md:ml-5 md:text-lg">
                  casual
                </span>
              </a>
              {/* <!-- image - end --> */}

              {/* <!-- image - start --> */}
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg  md:col-span-2 md:h-80"
              >
                <img
                  src="/assets/formal.png"
                  loading="lazy"
                  alt="formal"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 transform scale-x-[-1]"
                />

                <span className=" font-bold text-lg relative ml-4 mb-3 inline-block   md:ml-5 md:text-lg">
                  formal
                </span>
              </a>
              {/* <!-- image - end --> */}

              {/* <!-- image - start --> */}
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg  md:col-span-2 md:h-80"
              >
                <img
                  src="/assets/party.png"
                  loading="lazy"
                  alt="party"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 "
                />

                <span className=" font-bold text-lg relative ml-4 mb-3 inline-block   md:ml-5 md:text-lg">
                  party
                </span>
              </a>
              {/* <!-- image - end --> */}

              {/* <!-- image - start --> */}
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg  md:h-80"
              >
                <img
                  src="/assets/gym.png"
                  loading="lazy"
                  alt="gym"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 "
                />
                <span className=" font-bold text-lg relative ml-4 mb-3 inline-block   md:ml-5 md:text-lg">
                  gym
                </span>
              </a>
              {/* <!-- image - end --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browse;
