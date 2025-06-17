import React from "react";
import { Link } from "react-router";
import SetTitle from "../../Hooks/SetTitle";
import ErrorLottie from "../../Animation/ErrorLottie";

const ErrorPage = () => {
  SetTitle(`Error 404 ! Page Not Found`);

  return (
    <section className="">
      <div className="flex items-center justify-center p-8 bg-gradient-to-br from-[#064789] via-[#4f9ec4] to-[#ff5400] text-gray-900 py-10 md:py-0 min-h-screen">
        <div className="flex flex-col items-center text-center">
          <ErrorLottie></ErrorLottie>
          <p className="text-4xl md:text-5xl font-semibold md:mt-6">Uh-oh! We seem to be a bit lost.</p>
          <p className="mt-4 mb-8 text-gray-700 max-w-md">The page you’re looking for doesn’t exist anymore. But don’t worry — you can find plenty more on our homepage.</p>
          <Link to="/" className="px-6 py-3 rounded-full bg-gray-900 text-yellow-500 font-semibold shadow-md hover:bg-green-600 transition duration-300 hover:text-black">
            Take Me Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
