import React from "react";
import { BsClock, BsShieldCheck, BsStar } from "react-icons/bs";
import { FaUserSlash } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <BsShieldCheck className="w-8 h-8 text-primary" />,
      title: "Verified Tutors",
      desc: "All our tutors go through a strict verification process to ensure quality and trust.",
    },
    {
      icon: <BsClock className="w-8 h-8 text-primary" />,
      title: "Flexible Scheduling",
      desc: "Learn at your own pace with tutors available at times that suit you best.",
    },
    {
      icon: <BsStar className="w-8 h-8 text-primary" />,
      title: "Top Ratings",
      desc: "Rated by thousands of learners—our tutors maintain the highest standards.",
    },
    {
      icon: <FaUserSlash className="w-8 h-8 text-primary" />,
      title: "Diverse Subjects",
      desc: "Find tutors across languages, academics, coding, and much more.",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center ">Why Choose Us?</h2>
        <div className="w-24 h-1 bg-primary mx-auto my-5"></div>
        <p className="mt-4 text-lg opacity-80 text-center">Here’s why students love learning on our platform.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((item, index) => (
            <div key={index} className="card bg-base-100 shadow-md border dark:border-gray-700 p-6">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-center">{item.title}</h3>
              <p className="text-sm text-center text-gray-600 dark:text-gray-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
