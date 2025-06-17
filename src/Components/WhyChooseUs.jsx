import React from "react";
import { BsClock, BsShieldCheck, BsStar, BsGlobe, BsLaptop } from "react-icons/bs";
import { FaUserSlash, FaMoneyCheckAlt, FaUserFriends, FaBookReader } from "react-icons/fa";
import SetTitle from "../Hooks/SetTitle";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <BsShieldCheck className="w-8 h-8 text-primary" />,
      title: "Verified Tutors",
      desc: "All tutors pass a strict screening process to ensure high quality and trust.",
    },
    {
      icon: <BsClock className="w-8 h-8 text-primary" />,
      title: "Flexible Scheduling",
      desc: "Book lessons anytime that fits your daily routine and lifestyle.",
    },
    {
      icon: <BsStar className="w-8 h-8 text-primary" />,
      title: "Top Ratings",
      desc: "Rated highly by learners—our tutors deliver the best experience.",
    },
    {
      icon: <FaBookReader className="w-8 h-8 text-primary" />,
      title: "Diverse Subjects",
      desc: "Learn languages, academics, coding, and more from expert tutors.",
    },
    {
      icon: <BsGlobe className="w-8 h-8 text-primary" />,
      title: "Global Access",
      desc: "Join from anywhere in the world and connect with international tutors.",
    },
    {
      icon: <FaMoneyCheckAlt className="w-8 h-8 text-primary" />,
      title: "Affordable Pricing",
      desc: "Choose from a range of budget-friendly options without quality loss.",
    },
    {
      icon: <FaUserFriends className="w-8 h-8 text-primary" />,
      title: "One-on-One Learning",
      desc: "Personalized sessions focused on your specific learning needs.",
    },
    {
      icon: <BsLaptop className="w-8 h-8 text-primary" />,
      title: "Easy to Use",
      desc: "Simple, user-friendly interface for a smooth learning experience.",
    },
  ];

  return (
    <div className="bg-base-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Why Choose Us?</h2>
        <div className="w-24 h-1 bg-primary mx-auto my-5"></div>
        <p className="text-lg text-center opacity-80 mb-12">Here’s why students love learning on our platform.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 border border-base-300 divide-x divide-y divide-base-300 ">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 transform transition-all duration-300 hover:shadow-lg hover:scale-105 border border-white">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm   mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
