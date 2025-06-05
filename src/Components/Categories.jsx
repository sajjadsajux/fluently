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
    { id: 9, title: "Hindi", logo: "https://flagcdn.com/w40/in.png" },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-8 text-center  ">Language Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate(`/find-tutors?category=${encodeURIComponent(cat.title)}`)}
              className="cursor-pointer flex items-center justify-between bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center space-x-5">
                <img src={cat.logo} alt={`${cat.title} flag`} className="w-14 h-14 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600" />
                <h3 className="text-xl font-semibold text-gray-700 ">{cat.title}</h3>
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
