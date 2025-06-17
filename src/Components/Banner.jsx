import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import BannerSlider from "./BannerSlider";
const Banner = () => {
  return (
    <div className="w-full  px-2 md:px-0 ">
      <div className="bg-primary rounded-2xl shadow-lg p-6 md:min-h-[80vh] flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-8">
          {/* Slider Section */}
          <div className="w-full lg:w-1/2 transform hover:scale-105 transition duration-300">
            <BannerSlider />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
            <motion.h1 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} animate={{ transition: { duration: 2 } }} className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Learn Anytime,{" "}
              <motion.span animate={{ color: ["#ffffff", "#ff5400", "#4f9ec4"] }} transition={{ duration: 10, repeat: Infinity }}>
                From Anywhere
              </motion.span>
            </motion.h1>

            <p className="py-4 max-w-none mb-4">Find expert tutors in languages and subjects you care about. Book 1-on-1 lessons with ease and take control of your learning journey with our trusted online platform.</p>

            <Link to="/find-tutors" className="btn btn-secondary">
              Explore Tutors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
