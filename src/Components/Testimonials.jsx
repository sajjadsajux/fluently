import Slider from "react-slick";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Patel",
      feedback: "This platform helped me find the perfect tutor for French. Very flexible!",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Indian_Student_UOA_0478.jpg",
      role: "University Student",
      country: "India",
    },
    {
      id: 2,
      name: "Carlos Souza",
      feedback: "I improved my English for better job opportunities. Highly recommended!",
      image: "https://c0.wallpaperflare.com/preview/718/590/339/brazil-brasilia-sunset-sun.jpg",
      role: "Job Seeker",
      country: "Brazil",
    },
    {
      id: 3,
      name: "Maria Lopez",
      feedback: "Amazing experience. The tutors are helpful and responsive.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tcwydEvj6mksCNHIrwgaaGlucaYLaSZ2dQ&s",
      role: "High School Graduate",
      country: "Mexico",
    },
    {
      id: 4,
      name: "Ahmed Al-Jafar",
      feedback: "Great support and easy to schedule sessions. I’m very happy with the results.",
      image: "https://www.canamenterprises.com/wp-content/uploads/2019/04/LR-1-340x510.jpg",
      role: "Entrepreneur",
      country: "Egypt",
    },
    {
      id: 5,
      name: "Li Wei",
      feedback: "The tutors are patient and skilled. I finally feel confident speaking in class!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlo3LcgyyEagjZJC30stLvVEtpaMf6GC4AWw&s",
      role: "College Student",
      country: "China",
    },
    {
      id: 6,
      name: "Gerd Müller",
      feedback: "Everything is well-organized and user-friendly. Booking a session takes just seconds!",
      image: "https://c0.wallpaperflare.com/preview/554/373/190/man-in-white-crew-neck-t-shirt.jpg",
      role: "IELTS Candidate",
      country: "Germany",
    },
    {
      id: 7,
      name: "Sarah Johnson",
      feedback: "I love how flexible it is. I can learn whenever it fits my daily routine.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKUaQWbEG8l6o9sylvqt7iscRmt_jmG8Co5A&s",
      role: "Remote Worker",
      country: "United States",
    },
    {
      id: 8,
      name: "Giovanni Rossi",
      feedback: "This made learning easier for me. The tutors explain clearly and are always supportive.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NRTVqX-ARSd5yI39IEBj1jaQ6oZ6PpFWEw&s",
      role: "Job Seeker",
      country: "Italy",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-base-100/50 mb-16 ">
      <div className="max-w-7xl mx-auto px-8  ">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg opacity-80">Hear from those who've experienced our platform</p>
        </div>

        <Slider {...settings} className=" ">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-3 py-5">
              <div className="bg-base-100 border border-gray-300   rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-transform duration-300 hover:-translate-y-1  ">
                {/* Header: Avatar + Name */}
                <div className="flex items-center gap-4 ">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary" />
                  <div>
                    <p className="text-lg font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-primary ">{testimonial.role}</p>
                  </div>
                </div>

                {/* Feedback */}
                <div className="relative pl-6 text-base-content/80 italic h-20 overflow-auto">
                  <FaQuoteLeft className="absolute left-0 top-1 text-primary opacity-40" />
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
