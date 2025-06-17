import React from "react";
import errorAnim from "./errorpage.json";
import Lottie from "lottie-react";

const ErrorLottie = () => {
  return (
    <div className="text-center mb-6">
      <div className="flex flex-col items-center justify-center">
        <Lottie animationData={errorAnim} loop={true} style={{ height: 400 }} />
      </div>
    </div>
  );
};

export default ErrorLottie;
