import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    adaptiveHeight: true,
  };

  return (
    <div className="slider-container px-6 md:px-8 w-full overflow-hidden">
      <Slider {...settings}>
        <div className="p-2">
          <img src="https://i.ibb.co/ynn9h9Dn/learnlanguagesonlineconvert.jpg" alt="Learning Techniques" className="w-full h-48 md:h-72 lg:h-[520px] object-cover rounded-2xl shadow-md" />
        </div>
        <div className="p-2">
          <img src="https://i.ibb.co/FbNnHCJF/photo-1619852182277-79aa23f82c8e-q-80-w-1171-auto-format-fit-crop-ixlib-rb-4-1.jpg" alt="Learning Techniques" className="w-full h-48 md:h-72 lg:h-[520px] object-cover rounded-2xl shadow-md" />
        </div>

        <div className="p-2">
          <img src="https://i.ibb.co/gMVsdwNy/how-to-learn-a-new-language-jpg.webp" alt="Learn a New Language" className="w-full h-48 md:h-72 lg:h-[520px] object-cover rounded-2xl shadow-md" />
        </div>
        {/* <div className="p-2">
          <img src="https://i.ibb.co/zhrYJm4x/gurmentor-com-best-techniques-for-learning-a-foreign-language-2020-06-18-14-13-33-992016.jpg" alt="Learning Techniques" className="w-full h-48 md:h-72 lg:h-[520px] object-cover rounded-md shadow-md" />
        </div> */}
      </Slider>
    </div>
  );
};

export default BannerSlider;
