"use client";
import { Rating } from "@smastrom/react-rating";
import React from "react";
import "@smastrom/react-rating/style.css";

const ProductCard = ({
  image,
  title,
  rating,
  originalPrice,
  discountedPrice,
  discount,
}) => {
  return (
    <div className="w-[300px] p-4 rounded-[20px] ">
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover rounded-[20px] mb-4"
      />

      {/* Product Title */}
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

      {/* Rating */}
      <div className="flex items-center  mt-2 mb-4">
        <div className="flex items-center text-yellow-500">
          {[1, 2, 3, 4, 5].map(() => (
            <img src="/assets/icons/star.svg" alt="rating" />
          ))}
        </div>
        <p className="ml-2 flex flex-col items-center justify-center text-sm font-normal text-gray-600">
          {rating}/5
        </p>
        t5rfV
      </div>

      {/* Pricing */}
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-800">
          ${discountedPrice}
        </span>
        <span className="ml-2 text-sm text-gray-500 line-through">
          ${originalPrice}
        </span>
        {discount && (
          <span className="ml-2 px-2 py-1 text-xs font-semibold text-red-500 bg-red-100 rounded-full">
            -{discount}%
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
