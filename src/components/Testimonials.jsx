import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-black  mb-6">
          Our Happy Customers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah M.",
              feedback:
                "I’m blown away by the quality and style of the clothes I received from Shop.co.",
              rating: "5/5",
            },
            {
              name: "Alex K.",
              feedback:
                "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co.",
              rating: "5/5",
            },
            {
              name: "James L.",
              feedback:
                "The selection of clothes is not only diverse but also on-point with the latest trends.",
              rating: "5/5",
            },
          ].map((testimonial, index) => (
            <div key={index} className="border rounded-[20px] p-4">
              <p className="text-yellow-500">Rating: {testimonial.rating}</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-gray-600 italic mb-4">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
