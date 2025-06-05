import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amina Rahman",
      feedback: "This platform helped me find the perfect tutor for French. Very flexible and professional!",
      image: "https://i.ibb.co/SRPv5wQ/user1.jpg",
    },
    {
      id: 2,
      name: "Tanvir Ahmed",
      feedback: "I improved my English speaking in just 3 months. Highly recommended!",
      image: "https://i.ibb.co/6wrJz7y/user2.jpg",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      feedback: "Amazing experience. The tutors are helpful and responsive.",
      image: "https://i.ibb.co/xXGHmCK/user3.jpg",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-10">What Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card bg-base-100 shadow-xl border dark:border-gray-700">
              <figure className="px-10 pt-10">
                <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-24 h-24 object-cover" />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
