import React from "react";

const Header = () => {
  return (
    <header className="">
      <div className="text-center bg-black py-2 text-white">
        Sign up and get 20% off your first order.{" "}
        <a href="#" className="text-blue-500 underline">
          Sign Up Now
        </a>
      </div>
      <div className="bg-white text-black max-w-full  mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-[32px] font-bold">SHOP.CO</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-400">
            Shop
          </a>
          <a href="#" className="hover:text-gray-400">
            On Sale
          </a>
          <a href="#" className="hover:text-gray-400">
            New Arrivals
          </a>
          <a href="#" className="hover:text-gray-400">
            Brands
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="hidden rounded-[62px] md:block px-3 py-2 max-w-full  focus:outline-none focus:ring focus:ring-gray-300"
          />
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <button className="">
            <img src="/assets/icons/cart.svg" alt="cart" />
          </button>
          <button className="">
            <img src="/assets/icons/person.svg" alt="profile" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
