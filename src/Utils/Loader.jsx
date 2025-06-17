import React from "react";
import { FadeLoader, HashLoader } from "react-spinners";
import LoaderLottie from "../Animation/LoaderLottie";

const Loader = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      {/* <FadeLoader /> */}
      <LoaderLottie></LoaderLottie>
    </div>
  );
};

export default Loader;
