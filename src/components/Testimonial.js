import React from "react";
import { cust1, cust2, cust3, cust4 } from "/imgs/customers";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      image: cust1,
      name: "John",
      message:
        "Amazing Dish",
      rating: 5,
    },

    {
      id: 2,
      image: cust2,
      name: "Marc",
      message:
        "Amazing Dish.",
      rating: 4,
    },
    {
      id: 3,
      image: cust3,
      name: "Rebecca",
      message:
        "Amazing Dish.",
      rating: 5,
    },
    {
      id: 4,
      image: cust4,
      name: "Katy",
      message:
        "Amazing Dish.",
        rating: 4,
    },
  ];

  return (
    <>
      <h1 className="title">Testimonials</h1>

      <div className="">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="">
            <img
              src={testimonial.image}
              alt=""
              className=""
            />
            <h2 className="">
              {testimonial.name}
            </h2>
            <p className="">{testimonial.message}</p>
            <div><p>{testimonial.rating}</p></div>
          </div>
        ))}
      </div>

    </>
  );
};

export default Testimonial;
