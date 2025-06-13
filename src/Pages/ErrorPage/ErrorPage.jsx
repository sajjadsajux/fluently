import React from "react";
import { Link } from "react-router";
import SetTitle from "../../Hooks/SetTitle";

const ErrorPage = () => {
  SetTitle(`Error 404 ! Page Not Found`);

  return (
    <div className="">
      <section className="flex items-center h-[100vh] sm:p-16 bg-primary text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
          <p className="text-3xl">Looks like our services are currently offline</p>
          <Link to="/" className="px-8 py-3 font-semibold rounded bg-secondary hover:bg-green-600">
            Back to homepage
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
