import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amina Rahman",
      feedback: "This platform helped me find the perfect tutor for French. Very flexible and professional!",
      image: "https://i.ibb.co/SRPv5wQ/user1.jpg",
      role: "French Student",
    },
    {
      id: 2,
      name: "Tanvir Ahmed",
      feedback: "I improved my English speaking in just 3 months. Highly recommended!",
      image: "https://i.ibb.co/6wrJz7y/user2.jpg",
      role: "English Learner",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      feedback: "Amazing experience. The tutors are helpful and responsive.",
      image: "https://i.ibb.co/xXGHmCK/user3.jpg",
      role: "Language Student",
    },
  ];

  return (
    <div className="bg-base-100/50  py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg opacity-80">Hear from those who've experienced our platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group relative bg-base-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-base-200 dark:border-base-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                  <FiMessageSquare className="h-5 w-5" />
                </div>
              </div>

              <div className="pt-16 pb-8 px-6 text-center">
                <div className="flex justify-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-20 h-20 object-cover border-4 border-base-200 dark:border-base-300 shadow-md" />
                </div>

                <p className="text-lg font-medium mb-1">{testimonial.name}</p>
                <p className="text-sm text-primary mb-4">{testimonial.role}</p>

                <div className="relative mb-6">
                  <FaQuoteLeft className="absolute -top-2 -left-2 text-base-300 dark:text-base-400 text-xl opacity-50" />
                  <p className="text-base-content/80 italic relative px-4">{testimonial.feedback}</p>
                </div>

                <div className="flex justify-center space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="h-5 w-5" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
