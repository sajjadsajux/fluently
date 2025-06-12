import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amina Rahman",
      feedback: "This platform helped me find the perfect tutor for French. Very flexible and professional!",
      image: "https://i.ibb.co/SRPv5wQ/user1.jpg",
      role: "University Student",
    },
    {
      id: 2,
      name: "Tanvir Ahmed",
      feedback: "I improved my English speaking in just 3 months. Highly recommended!",
      image: "https://i.ibb.co/6wrJz7y/user2.jpg",
      role: "Freelance Designer",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      feedback: "Amazing experience. The tutors are helpful and responsive.",
      image: "https://i.ibb.co/xXGHmCK/user3.jpg",
      role: "High School Graduate",
    },
    {
      id: 4,
      name: "Karim Uddin",
      feedback: "Great support and easy to schedule sessions. I’m very happy with the results.",
      image: "https://i.ibb.co/yXDYZTz/user4.jpg",
      role: "Entrepreneur",
    },
    {
      id: 5,
      name: "Farah Nabila",
      feedback: "The tutors are patient and skilled. I finally feel confident speaking in class!",
      image: "https://i.ibb.co/gW1Sy6v/user5.jpg",
      role: "College Student",
    },
    {
      id: 6,
      name: "Rafiq Hossain",
      feedback: "Everything is well-organized and user-friendly. Booking a session takes just seconds!",
      image: "https://i.ibb.co/nzLnpfD/user6.jpg",
      role: "IELTS Candidate",
    },
    {
      id: 7,
      name: "Sadia Karim",
      feedback: "I love how flexible it is. I can learn whenever it fits my daily routine.",
      image: "https://i.ibb.co/gm9Y8nH/user7.jpg",
      role: "Remote Worker",
    },
    {
      id: 8,
      name: "Hasib Mahmud",
      feedback: "This made learning easier for me. The tutors explain clearly and are always supportive.",
      image: "https://i.ibb.co/0fYdFpr/user8.jpg",
      role: "Job Seeker",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-base-100/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg opacity-80">Hear from those who've experienced our platform</p>
        </div>

        <Slider {...settings} className="space-x-6 ">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-3">
              <div className="bg-base-100 border border-base-200 dark:border-base-300 rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 border-white">
                {/* Header: Avatar + Name */}
                <div className="flex items-center gap-4 ">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary" />
                  <div>
                    <p className="text-lg font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>

                {/* Feedback */}
                <div className="relative pl-6 text-base-content/80 italic">
                  <FaQuoteLeft className="absolute -left-1 top-1 text-primary opacity-40" />
                  <p>{testimonial.feedback}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
