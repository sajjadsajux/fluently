import React from "react";
import { useNavigate } from "react-router";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, title: "English", logo: "https://flagcdn.com/w40/gb.png" },
    { id: 2, title: "Spanish", logo: "https://flagcdn.com/w40/es.png" },
    { id: 3, title: "French", logo: "https://flagcdn.com/w40/fr.png" },
    { id: 4, title: "German", logo: "https://flagcdn.com/w40/de.png" },
    { id: 5, title: "Chinese", logo: "https://flagcdn.com/w40/cn.png" },
    { id: 6, title: "Japanese", logo: "https://flagcdn.com/w40/jp.png" },
    { id: 7, title: "Russian", logo: "https://flagcdn.com/w40/ru.png" },
    { id: 8, title: "Arabic", logo: "https://flagcdn.com/w40/sa.png" },
    { id: 9, title: "Bangla", logo: "https://flagcdn.com/w40/bd.png" },
    { id: 10, title: "Korean", logo: "https://flagcdn.com/w40/kr.png" },
    { id: 11, title: "Italian", logo: "https://flagcdn.com/w40/it.png" },
    { id: 12, title: "Turkish", logo: "https://flagcdn.com/w40/tr.png" },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold  mb-4 text-center  ">Language Categories</h2>
        <div className="w-24 h-1 bg-primary mx-auto"></div>

        <p className="mt-4 text-lg opacity-80 text-center">Discover the rich diversity of language tutors helping people connect, learn, and grow across borders.</p>

        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate(`/find-tutors?category=${encodeURIComponent(cat.title)}`)}
              className="cursor-pointer flex items-center justify-between   shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-gray-400 "
            >
              <div className="flex items-center space-x-5">
                <img src={cat.logo} alt={`${cat.title} flag`} className="w-14 h-14 rounded-full object-cover border-2 border-gray-300 " />
                <h3 className="text-xl font-semibold  ">{cat.title}</h3>
              </div>
              <div className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
