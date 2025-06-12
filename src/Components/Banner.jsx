import React from "react";
import { motion } from "motion/react";
const Banner = () => {
  return (
    <div className="w-full ">
      <div className="hero min-h-[78vh] bg-primary rounded-2xl shadow-lg ">
        <div className="hero-content  container mx-auto flex-col-reverse lg:flex-row-reverse gap-8">
          <div
            className="flex-1 transform hover:scale-105 transition duration-300
"
          >
            <img src="https://images.unsplash.com/photo-1619852182277-79aa23f82c8e?q=80&w=2071&auto=format&fit=crop" alt="Online tutoring illustration" className=" rounded-lg shadow-2xl object-cover w-full h-full max-h-[400px]" />
          </div>

          <div className="flex-1 text-white">
            <motion.h1
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                transition: { duration: 2 },
              }}
              className="text-4xl font-bold"
            >
              Learn Anytime, <motion.span animate={{ color: ["#FF5400", "#46e90e", "#17b4ef"], transition: { duration: 10, repeat: Infinity } }}>From Anywhere</motion.span>
            </motion.h1>
            <p className="py-4 max-w-none">Find expert tutors in languages and subjects you care about. Book 1-on-1 lessons with ease and take control of your learning journey with our trusted online platform.</p>
            <button className="btn btn-secondary">Explore Tutors</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
