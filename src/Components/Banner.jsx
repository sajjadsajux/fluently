import React from "react";

const Banner = () => {
  return (
    <div className="w-full ">
      <div className="hero min-h-[75vh] bg-primary rounded-2xl shadow-lg my-6">
        <div className="hero-content  container mx-auto flex-col-reverse lg:flex-row-reverse gap-8">
          <img src="https://images.unsplash.com/photo-1619852182277-79aa23f82c8e?q=80&w=2071&auto=format&fit=crop" alt="Online tutoring illustration" className="flex-1 rounded-lg shadow-2xl object-cover w-full h-full max-h-[400px]" />
          <div className="flex-1 text-white">
            <h1 className="text-4xl font-bold">Learn Anytime, From Anywhere</h1>
            <p className="py-4 max-w-none">Find expert tutors in languages and subjects you care about. Book 1-on-1 lessons with ease and take control of your learning journey with our trusted online platform.</p>
            <button className="btn btn-primary">Explore Tutors</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
