import React from "react";
import { toast } from "react-toastify";

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Thanks for Subscribing");
    e.target.reset();
  };
  return (
    <div className="bg-base-100 mb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Subscribe to our newsletter</h2>
        <div className="w-24 h-1 bg-primary mx-auto my-5"></div>
        <p className="text-lg text-center opacity-80 mb-12">Join thousands of learners getting weekly language tips, tutor news & exclusive deals.</p>

        <div className="px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Illustration */}
          <div className="text-center md:text-left">
            <img
              src="/Newsletter.png" // 🖼️ Replace with your actual image name
              alt="Newsletter Illustration"
              className="w-full max-w-md mx-auto md:mx-0"
            />
          </div>

          {/* Right Form */}
          <div>
            <p className="text-lg opacity-80 mb-8"> Get helpful language tips, news from tutors, and special offers right in your inbox. We send one email each week to help you learn better. Join thousands of learners already enjoying it!</p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="relative">
                <label htmlFor="email" className="block mb-1 text-base font-medium text-base-content">
                  Email Address
                </label>
                <input type="email" id="email" required placeholder="you@example.com" className="w-full px-4 py-3 pl-10 rounded-lg border border-base-300 bg-base-200 text-base-content focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" />
                <span className="absolute inset-y-0 left-3 top-8 flex items-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12l-4-4-4 4m0 0l4 4 4-4m-4-4v8" />
                  </svg>
                </span>
              </div>

              <p className="text-xs text-gray-500">No spam ever. We respect your privacy.</p>

              {/* Submit Button */}
              <button type="submit" className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-focus shadow transition">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
