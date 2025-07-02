import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";
import BannerSlider from "./BannerSlider";
const Banner = () => {
  return (
    <div className="w-full  px-2 md:px-0 mb-16">
      <div className="bg-primary rounded-2xl shadow-lg p-6 md:min-h-[70vh] flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-8">
          {/* Slider Section */}
          <div className="w-full lg:w-3/5 transform hover:scale-105 transition duration-300">
            <BannerSlider />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-2/5 text-center lg:text-left text-white">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center  lg:text-left">
              Learn Anytime,{" "}
              <span className="text-secondary">
                <Typewriter words={["From Anywhere", "At Your Pace", "With Top Tutors"]} loop={0} cursor cursorStyle="|" typeSpeed={80} deleteSpeed={50} delaySpeed={1500} />
              </span>
            </h1>

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
